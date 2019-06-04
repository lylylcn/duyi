var item2 = {
    init: function () {
        this.bindEvent();
    },
    bindEvent:function() {
        var oItem = document.getElementsByClassName('item2')[0];
        oItem.onclick = this.changeColor;
    },
    changeColor: function() {
        this.style.width = '300px';
    }
}
module.exports = item2;