// 等待 DOM 内容加载完成后再执行代码
document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的筛选按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 获取所有酒品项
    const cocktailItems = document.querySelectorAll('.cocktail-item');
    
    // 添加点击事件监听器
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log("Clicked");
            // 根据筛选条件显示或隐藏酒品
            cocktailItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block'; // 显示所有酒品
                } else if (item.classList.contains(filter)) {
                    item.style.display = 'block'; // 显示匹配分类的酒品
                } else {
                    item.style.display = 'none'; // 隐藏不匹配的酒品
                }
            });
        });
    });
});
