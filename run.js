const { execSync } = require('child_process');

console.log('正在通过 npx 启动 nodejs-argo...');

try {
    // 使用 -y 自动确认安装，stdio: 'inherit' 让日志正常输出到面板控制台
    execSync('npx -y nodejs-argo', { stdio: 'inherit' });
} catch (error) {
    console.error('启动 nodejs-argo 失败:', error);
}
