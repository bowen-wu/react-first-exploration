{
    // context 满足两个条件
    // 1 -> f1 + f2 + f3 + f4 如果不需要 n 则不需要关注 n
    // 2 -> context 不能随意改动，只能通过 window.setContext();
    let context = {} // 局部的全局变量，context 限制在一个作用域中
    window.setContext = (key, value) => {
        context[key] = value;
    }
    window.f1 = function f1() {
        console.log(1);
        f2();
    }

    function f2() {
        console.log(2, );
        f3();
    }

    function f3() {
        console.log(3, );
        f4();
    }

    function f4() {
        console.log(4, context.n);
    }
}

{
    window.setContext('n', 100);
    setTimeout(() => {
        window.f1();
    }, 1000);
    console.log('done');
}