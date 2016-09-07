var menuItemList = document.querySelectorAll('.dropdown');

for (var i = 0; i < menuItemList.length; i++) {

  menuItemList[i].addEventListener('mouseenter', function() {
    var subMenuItemList = this.querySelector('.submenu');
    subMenuItemList.style.display = 'block';
  });

  menuItemList[i].addEventListener('mouseleave', function() {
    var subMenuItemList = this.querySelector('.submenu');
    subMenuItemList.style.display = 'none';
  });
}