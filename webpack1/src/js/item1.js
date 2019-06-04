var item1 = {
    init: function () {
        this.bindEvent();
    },
    bindEvent:function() {
        var oItem = document.getElementsByClassName('item1')[0];
        oItem.onclick = this.changeColor;
    },
    changeColor: function() {
        this.style.background = 'blue';
    }
}
module.exports = item1;