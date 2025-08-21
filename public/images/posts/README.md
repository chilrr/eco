# 文章图片存储目录

## 使用说明

1. **图片命名规范**：
   - 使用英文和数字，避免中文
   - 格式：`文章slug-图片序号.jpg`
   - 例如：`buycoin-01.jpg`, `buycoin-02.png`

2. **支持格式**：
   - JPG/JPEG（推荐，文件小）
   - PNG（需要透明背景时使用）
   - WebP（现代浏览器，最优压缩）

3. **图片优化建议**：
   - 宽度建议：800-1200px
   - 文件大小：< 500KB
   - 使用工具压缩：TinyPNG、ImageOptim等

4. **在Markdown中使用**：
   ```markdown
   ![图片描述](/images/posts/buycoin-01.jpg)
   
   # 或者带标题
   ![币安注册界面](/images/posts/buycoin-01.jpg "币安注册第一步")
   ```

## 目录结构示例
```
public/images/posts/
├── buycoin-01.jpg          # 币安注册截图1
├── buycoin-02.jpg          # 币安注册截图2
├── wallet-security-01.jpg  # 钱包安全图片1
└── airdrop-guide-01.png    # 空投指南图片1
```