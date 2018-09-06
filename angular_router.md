### angular 路由传参的几种方式

方法一：   



### 解决Angular4项目部署到服务器上刷新404的问题

        **import {HashLocationStrategy , LocationStrategy} from '@angular/common';**
         
        @NgModule({
         declarations: [AppCmp],
         bootstrap: [AppCmp],
         imports: [BrowserModule, routes],
         
         **providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]**
         
        });