//
//  BaseOnResponseURLProtocol.m
//  WKLoadResource
//
//  Created by sunyn on 2018/9/18.
//  Copyright © 2018年 sunyn. All rights reserved.
//

#import "BaseOnResponseURLProtocol.h"
#import <MobileCoreServices/UTType.h>

static NSString* const BaseOnResponseURLProtocolKey = @"BaseOnResponseURLProtocolKey";

@interface BaseOnResponseURLProtocol () <NSURLConnectionDelegate>
@property (nonatomic, strong) NSURLConnection *connection;
@property (nonatomic, strong) NSEnumerator *enumerator;
@end
@implementation BaseOnResponseURLProtocol
+ (BOOL)canInitWithRequest:(NSURLRequest *)request
{
    NSLog(@"request.URL.absoluteString = %@",request.URL.absoluteString);

    if ( ([request.URL.absoluteString hasPrefix:@"http://game.scool.online/cutcake1/"]))
    {
        //看看是否已经处理过了，防止无限循环
        if ([NSURLProtocol propertyForKey:BaseOnResponseURLProtocolKey inRequest:request]) {
            return NO;
        }
        
        return YES;
    }
    return NO;
}

+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request
{

    return request;
}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest *)a toRequest:(NSURLRequest *)b
{
    return [super requestIsCacheEquivalent:a toRequest:b];
}

- (void)startLoading {
 

    //1.获取资源文件路径 ajkyq/index.html
    NSURL *url = [self request].URL;
    //2.读取资源文件内容
    NSString *path = [[NSBundle mainBundle] pathForResource:@"NewProject" ofType:@"js"];

    NSFileHandle *file = [NSFileHandle fileHandleForReadingAtPath:path];
    NSData *data = [file readDataToEndOfFile];
    [file closeFile];
    
    
    //3.拼接响应Response
    NSInteger dataLength = data.length;
    NSString *mimeType = [self getMIMETypeWithCAPIAtFilePath:path];
    NSString *httpVersion = @"HTTP/1.1";
    NSHTTPURLResponse *response = nil;
    
    if (dataLength > 0) {
        response = [self jointResponseWithData:data dataLength:dataLength mimeType:@"script" requestUrl:url statusCode:200 httpVersion:httpVersion];
    } else {
        response = [self jointResponseWithData:[@"404" dataUsingEncoding:NSUTF8StringEncoding] dataLength:3 mimeType:mimeType requestUrl:url statusCode:404 httpVersion:httpVersion];
    }
    
    //4.响应
    [[self client] URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
    [[self client] URLProtocol:self didLoadData:data];
    [[self client] URLProtocolDidFinishLoading:self];
    
    
}
- (void)stopLoading
{
    [self.connection cancel];
}
#pragma mark - NSURLConnectionDelegate

- (void) connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
    [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageNotAllowed];
}

- (void) connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    [self.client URLProtocol:self didLoadData:data];
}

- (void) connectionDidFinishLoading:(NSURLConnection *)connection {
    [self.client URLProtocolDidFinishLoading:self];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    [self.client URLProtocol:self didFailWithError:error];
}
#pragma mark -- private

+(NSMutableURLRequest*)redirectHostInRequset:(NSMutableURLRequest*)request
{
    if ([request.URL host].length == 0) {
        return request;
    }
    
    NSString *originUrlString = [request.URL absoluteString];
    NSString *originHostString = [request.URL host];
    NSRange hostRange = [originUrlString rangeOfString:originHostString];
    if (hostRange.location == NSNotFound) {
        return request;
    }
    
    //定向到bing搜索主页
    NSString *ip = @"www.baidu.com";
    
    // 替换host
    NSString *urlString = [originUrlString stringByReplacingCharactersInRange:hostRange withString:ip];
    NSURL *url = [NSURL URLWithString:urlString];
    request.URL = url;
    
    return request;
}

#pragma mark - 获取mimeType
-(NSString *)getMIMETypeWithCAPIAtFilePath:(NSString *)path
{
    if (![[[NSFileManager alloc] init] fileExistsAtPath:path]) {
        return @"text/html";
    }
    
    CFStringRef UTI = UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, (__bridge CFStringRef)[path pathExtension], NULL);
    CFStringRef MIMEType = UTTypeCopyPreferredTagWithClass (UTI, kUTTagClassMIMEType);
    CFRelease(UTI);
    if (!MIMEType) {
        return @"application/octet-stream";
    }
    return (__bridge NSString *)(MIMEType);
}

#pragma mark - 拼接响应Response
-(NSHTTPURLResponse *)jointResponseWithData:(NSData *)data dataLength:(NSInteger)dataLength mimeType:(NSString *)mimeType requestUrl:(NSURL *)requestUrl statusCode:(NSInteger)statusCode httpVersion:(NSString *)httpVersion
{
    NSDictionary *dict = @{@"Content-type":mimeType,
                           @"Content-length":[NSString stringWithFormat:@"%ld",dataLength]};
    NSHTTPURLResponse *response = [[NSHTTPURLResponse alloc] initWithURL:requestUrl statusCode:statusCode HTTPVersion:httpVersion headerFields:dict];
    return response;
}


- (void)URLSession:(NSURLSession *)session dataTask:(NSURLSessionDataTask *)dataTask didReceiveResponse:(NSURLResponse *)response completionHandler:(void (^)(NSURLSessionResponseDisposition))completionHandler {
    [[self client] URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageAllowed];
    
    completionHandler(NSURLSessionResponseAllow);
}

- (void)URLSession:(NSURLSession *)session dataTask:(NSURLSessionDataTask *)dataTask didReceiveData:(NSData *)data {
    [[self client] URLProtocol:self didLoadData:data];
}

- (void)URLSession:(NSURLSession *)session task:(NSURLSessionTask *)task didCompleteWithError:(nullable NSError *)error {
    [self.client URLProtocolDidFinishLoading:self];
}

@end
