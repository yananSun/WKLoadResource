//
//  BaseOnRedirectRequestURLProtocol.m
//  WKLoadResource
//
//  Created by sunyn on 2018/9/18.
//  Copyright © 2018年 sunyn. All rights reserved.
//

#import "BaseOnRedirectRequestURLProtocol.h"
#import <UIKit/UIKit.h>

static NSString* const BaseOnRedirectRequestURLProtocolKey = @"BaseOnRedirectRequestURLProtocol";

@interface BaseOnRedirectRequestURLProtocol () <NSURLSessionDelegate>

@property (nonnull,strong) NSURLSessionDataTask *task;

@end
@implementation BaseOnRedirectRequestURLProtocol
+ (BOOL)canInitWithRequest:(NSURLRequest *)request
{
    NSLog(@"request.URL.absoluteString = %@",request.URL.absoluteString);
    NSString *scheme = [[request URL] scheme];
    if ( ([scheme caseInsensitiveCompare:@"http"]  == NSOrderedSame ||
          [scheme caseInsensitiveCompare:@"https"] == NSOrderedSame ))
    {
        //看看是否已经处理过了，防止无限循环
        if ([NSURLProtocol propertyForKey:BaseOnRedirectRequestURLProtocolKey inRequest:request])
            return NO;
        return YES;
    }
    return NO;
}

+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request
{
    NSMutableURLRequest *mutableReqeust = [request mutableCopy];
    NSLog(@"%@",request.HTTPMethod);
    
    NSLog(@"url ---[%@]\n\n",request.URL.absoluteString);
    

    //线程安全
    NSSet *set = [NSSet setWithObjects:@"http://www.w3school.com.cn/c5_20171220.css", nil];
    
    if ([set containsObject:request.URL.absoluteString]) {

        NSRecursiveLock *lock = [[NSRecursiveLock alloc]init];

        [lock lock];
        //request截取重定向
        NSString * filePath = [[NSBundle mainBundle] pathForResource:@"NewCss" ofType:@"css"];
    
        NSURL * url = [NSURL fileURLWithPath:filePath];
        mutableReqeust.URL = url;
        

        [lock unlock];
            

    }

    return mutableReqeust;

}

+ (BOOL)requestIsCacheEquivalent:(NSURLRequest *)a toRequest:(NSURLRequest *)b
{
    return [super requestIsCacheEquivalent:a toRequest:b];
}

- (void)startLoading{
    
    NSMutableURLRequest* request = self.request.mutableCopy;
    [NSURLProtocol setProperty:@YES forKey:BaseOnRedirectRequestURLProtocolKey inRequest:request];
    NSURLSession *session = [NSURLSession sessionWithConfiguration:[NSURLSessionConfiguration defaultSessionConfiguration] delegate:self delegateQueue:nil];
    self.task = [session dataTaskWithRequest:self.request];
    [self.task resume];
    

}
- (void)stopLoading
{
    if (self.task != nil) {
        [self.task  cancel];
    }
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
