# 图片使用指南

## 📁 存储位置
所有文章图片存放在 `public/images/posts/` 目录下

## 🏷️ 命名规范
- 格式：`文章slug-序号.扩展名`
- 示例：
  - `buycoin-01.jpg` - 币安注册第1张图
  - `wallet-security-02.png` - 钱包安全第2张图
  - `airdrop-guide-03.webp` - 空投指南第3张图

## 📝 在Markdown中使用

### 基础语法
```markdown
![图片描述](/images/posts/buycoin-01.jpg)
```

### 带标题
```markdown
![币安注册界面](/images/posts/buycoin-01.jpg "点击注册按钮")
```

### 使用组件（推荐）
```markdown
<ImageOptimizer 
  src="/images/posts/buycoin-01.jpg"
  alt="币安注册界面"
  size="md"
  align="center"
  caption="在币安首页点击注册按钮"
/>
```

## 🎛️ 图片控制参数

### 基础参数
```markdown
<ImageOptimizer 
  src="/images/posts/example.jpg"
  alt="图片描述"
  caption="图片说明文字"
/>
```

### 尺寸控制 (size)
```markdown
<!-- 6种尺寸选择 -->
<ImageOptimizer src="..." alt="..." size="xs" />   <!-- 200px -->
<ImageOptimizer src="..." alt="..." size="sm" />   <!-- 300px -->
<ImageOptimizer src="..." alt="..." size="md" />   <!-- 500px (默认) -->
<ImageOptimizer src="..." alt="..." size="lg" />   <!-- 700px -->
<ImageOptimizer src="..." alt="..." size="xl" />   <!-- 900px -->
<ImageOptimizer src="..." alt="..." size="full" /> <!-- 100% -->
```

### 对齐方式 (align)
```markdown
<ImageOptimizer src="..." alt="..." align="left" />   <!-- 左对齐 -->
<ImageOptimizer src="..." alt="..." align="center" /> <!-- 居中 (默认) -->
<ImageOptimizer src="..." alt="..." align="right" />  <!-- 右对齐 -->
```

### 浮动布局 (float)
```markdown
<!-- 文字环绕效果 -->
<ImageOptimizer src="..." alt="..." float="left" size="sm" />
这段文字会环绕在图片右侧显示，适合在文章中插入小图片作为辅助说明。

<ImageOptimizer src="..." alt="..." float="right" size="sm" />
这段文字会环绕在图片左侧显示，创造更丰富的排版效果。
```

### 样式控制
```markdown
<!-- 阴影效果 -->
<ImageOptimizer src="..." alt="..." shadow="none" />  <!-- 无阴影 -->
<ImageOptimizer src="..." alt="..." shadow="sm" />    <!-- 小阴影 -->
<ImageOptimizer src="..." alt="..." shadow="md" />    <!-- 中阴影 (默认) -->
<ImageOptimizer src="..." alt="..." shadow="lg" />    <!-- 大阴影 -->

<!-- 圆角样式 -->
<ImageOptimizer src="..." alt="..." rounded="none" /> <!-- 直角 -->
<ImageOptimizer src="..." alt="..." rounded="sm" />   <!-- 小圆角 -->
<ImageOptimizer src="..." alt="..." rounded="md" />   <!-- 中圆角 (默认) -->
<ImageOptimizer src="..." alt="..." rounded="lg" />   <!-- 大圆角 -->
<ImageOptimizer src="..." alt="..." rounded="full" /> <!-- 圆形 -->

<!-- 边框 -->
<ImageOptimizer src="..." alt="..." border={true} />  <!-- 添加边框 -->
```

### 手机截图专用
```markdown
<ImageOptimizer 
  src="/images/posts/buycoin-phone-01.png"
  alt="币安注册界面"
  type="phone"
  size="md"
  caption="第一步：点击注册按钮"
/>
```

## 📱 常用组合示例

### 1. 文章主图 (大尺寸居中)
```markdown
<ImageOptimizer 
  src="/images/posts/main-image.jpg"
  alt="主要内容图片"
  size="lg"
  align="center"
  caption="这是文章的主要配图"
/>
```

### 2. 步骤说明图 (中等尺寸)
```markdown
<ImageOptimizer 
  src="/images/posts/step-01.jpg"
  alt="操作步骤1"
  size="md"
  shadow="lg"
  caption="第一步：打开应用"
/>
```

### 3. 侧边辅助图 (小尺寸浮动)
```markdown
<ImageOptimizer 
  src="/images/posts/tip-icon.jpg"
  alt="提示图标"
  size="xs"
  float="right"
  rounded="full"
/>
这里是正文内容，图片会浮动在右侧...
```

### 4. 手机截图展示
```markdown
<ImageOptimizer 
  src="/images/posts/app-screenshot.png"
  alt="应用截图"
  type="phone"
  size="lg"
  align="center"
  caption="应用主界面截图"
/>
```

## 🎨 图片优化建议

### 尺寸规范
- **手机截图**：iPhone 14 Pro 尺寸 (1179x2556px)
- **普通图片**：800-1200px（文章内容图）
- **高度**：自适应，保持比例
- **缩略图**：400x300px

### 文件大小
- **目标**：< 500KB
- **最大**：< 1MB
- **手机截图**：< 800KB（因为尺寸较大）
- **缩略图**：< 100KB

### 格式选择
- **PNG**：手机截图（保持清晰度，推荐）
- **JPG**：普通照片、截图
- **WebP**：现代浏览器，最佳压缩

## 🛠️ 压缩工具推荐

### 在线工具
1. **TinyPNG** - https://tinypng.com/
2. **Squoosh** - https://squoosh.app/
3. **Compressor.io** - https://compressor.io/

### 本地工具
- **Mac**: ImageOptim
- **Windows**: PNGGauntlet
- **跨平台**: GIMP

## 📱 响应式处理
图片会自动适配不同屏幕尺寸：
- 桌面端：原始尺寸
- 平板：缩放至容器宽度
- 手机：缩放至屏幕宽度

## 🔍 SEO优化
- 使用描述性的 `alt` 文本
- 添加有意义的 `title` 属性
- 文件名使用英文，避免中文

## 示例文件结构
```
public/images/posts/
├── buycoin-phone-01.png        # 手机截图（iPhone样式）
├── buycoin-phone-02.png        # 手机截图
├── buycoin-phone-03.png        # 手机截图
├── wallet-phone-01.png         # 钱包手机截图
├── trade-phone-01.png          # 交易手机截图
以及普通图片：
├── buycoin-01.jpg           # 币安首页
├── buycoin-02.jpg           # 注册页面
├── buycoin-03.jpg           # 验证步骤
├── wallet-security-01.jpg   # 冷钱包介绍
├── wallet-security-02.jpg   # 设置步骤
├── airdrop-guide-01.png     # 空投平台
└── trade-basic-01.jpg       # 交易界面
```