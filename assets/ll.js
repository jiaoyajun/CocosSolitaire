window.__my__ = {};
window.ll = window.__my__;

(function (__my__) {
    class MyTest {
        static Log() {
            console.debug("Hello LLFramework!");
        }
        static Log2() {
            console.debug("Hello LLFramework! 2");
        }
    }
    __my__.MyTest = MyTest;
})(__my__ || (__my__ = {}));
