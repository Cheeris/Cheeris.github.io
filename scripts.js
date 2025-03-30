document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#cocktailMenu');

    // 初始化 Isotope
    const iso = new Isotope(grid, {
        itemSelector: '.cocktail-item', // 选择要布局的元素
        layoutMode: 'masonry',         // 使用 Masonry 布局
        masonry: {
            columnWidth: 20, // 列宽
            gutter: 20                    // 间距
        },
        percentPosition: true            // 使用百分比布局
    });

    // 确保图片加载完成后再布局
    imagesLoaded(grid, function() {
        iso.layout();
    });

    // 筛选按钮事件
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue === 'all' ? '*' : '.' + filterValue
            });

            // 可选：更新按钮的 active 状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});