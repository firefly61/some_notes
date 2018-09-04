### constructor vs ngOnInit
constructor 是ES6类或TypeScript类中的特殊方法，不是Angular的方法。主要用来做初始化操作，在进行类实例化操作是，会被自动调用。通过constructor方法并不能使我们知道Angular何时完成了组件的初始化工作。
    _使用场景：_ 构造函数一般用于**依赖注入**或执行一些**简单的初始化操作**

ngOnInit 是 Angular 组件生命周期中的一个钩子，用于 angular 获取输入属性后初始化组件。该钩子方法会在第一次ngOnChanges之后调用，且仅会调用一次。
    _使用场景：_  执行数据初始化操作。比如组件获取输入属性之后。(@Input输入值可以在ngOnInit中访问，而不是在构造函数中)
    
### angular 生命周期
    
    ngOnChanges:
    ngOnInit: