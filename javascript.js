const searchInput=document.querySelector("#search");

searchInput.addEventListener("keydown",function(event)
{
    if(event.code=="Enter"){
        search();
    }
});
function search()
{
     const input= searchInput.value;
     window.location.href="https://www.google.co.in/search?q="+ input+"&sxsrf=AOaemvJHOPkH4qd0r55wSoPmJ38wrayyPQ%3A1635420087196&source=hp&ei=t4d6Ye3vCO7d1sQP-vCK0As&iflsig=ALs-wAMAAAAAYXqVx9QWcYUNmfJOMQCO1A0V7z3JoyLj&ved=0ahUKEwitp-nK_uzzAhXurpUCHXq4AroQ4dUDCAg&uact=5&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMggIABCABBCxAzIICC4QgAQQsQMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMggILhCxAxCDATIFCAAQgAQyBQguEIAEOg4IABDqAhC0AhDZAhDlAjoLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOggIABCxAxCDAToLCC4QgAQQsQMQgwE6CAgAEIAEEMkDOgUIABCSA1CLD1ipJ2DJLWgBcAB4AIABeogB_wOSAQMyLjOYAQCgAQGwAQg&sclient=gws-wiz"
}