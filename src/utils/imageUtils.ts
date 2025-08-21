/**
 * 图片工具函数
 */

// 检查图片是否存在
export function checkImageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

// 获取图片的优化版本路径
export function getOptimizedImagePath(originalPath: string, width?: number): string {
  if (!originalPath.startsWith('/images/')) {
    return originalPath;
  }

  const pathParts = originalPath.split('.');
  const extension = pathParts.pop();
  const basePath = pathParts.join('.');
  
  if (width) {
    return `${basePath}-${width}w.${extension}`;
  }
  
  return originalPath;
}

// 生成响应式图片的 srcset
export function generateSrcSet(basePath: string): string {
  const widths = [400, 800, 1200];
  const extension = basePath.split('.').pop();
  const basePathWithoutExt = basePath.replace(`.${extension}`, '');
  
  return widths
    .map(width => `${basePathWithoutExt}-${width}w.${extension} ${width}w`)
    .join(', ');
}

// 图片压缩建议
export const IMAGE_OPTIMIZATION_TIPS = {
  formats: {
    jpg: '适用于照片，压缩率高',
    png: '适用于图标、透明背景',
    webp: '现代格式，最佳压缩率'
  },
  sizes: {
    thumbnail: '200x200px',
    small: '400x300px', 
    medium: '800x600px',
    large: '1200x900px'
  },
  maxFileSize: '500KB',
  tools: [
    'TinyPNG - 在线压缩',
    'ImageOptim - Mac工具',
    'Squoosh - Google工具'
  ]
};