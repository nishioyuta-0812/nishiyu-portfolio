<footer class="footer">
  <ul>
    <li><a href="/privacyPolicy">プライバシーポリシー</a></li>
    <li><a href="/disclaimer">免責事項</a></li>
  </ul>
</footer>

<style lang="scss">
  footer {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.5px solid rgba($color: #d6d6d6, $alpha: 1.0);
    ul {
      display: flex;

      li {
        margin-right: 20px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .footer {
      width: 100%;
    }
  }
</style>