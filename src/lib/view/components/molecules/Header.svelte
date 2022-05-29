<header class="header">
  <nav>
    <div class="left-item">
      <a href="/">Nishiyu Portfolio</a>
    </div>
    <div class="right-item">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">

  .header {
    z-index: 9999;
    height: 90px;
    width: 100%;
    display: flex;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.107);
    font-size: 25px;
    position: fixed;
    top: 0;
    left: 0;
    font-family: cursive;

    nav {
      margin: 0 auto;
      align-items: center;
      display: flex;
      width: 1100px;

      .left-item {
        margin-right: auto;
        font-size: 30px;
        font-weight: bold;
      }

      .right-item {
        margin-left: auto;
      }

      ul {
        display: flex;

        li {
          margin-right: 50px;
        }

        li:last-child {
          margin-right: 0px;
        }
      }
    }
  }


</style>