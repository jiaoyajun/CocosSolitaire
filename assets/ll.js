window.__my__ = {};
window.ll = window.__my__;

(function (__my__) {
    class MyTest {
        static Log() {
            console.debug("Hello LLFramework!");
        }
    }
    __my__.MyTest = MyTest;
})(__my__ || (__my__ = {}));
