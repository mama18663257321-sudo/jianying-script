// === 自动更新系统 ===
var 更新配置 = {
    脚本直链: "https://raw.githubusercontent.com/mama18663257321-sudo/jianying-script/refs/heads/main/%E5%89%AA%E6%98%A0%E8%87%AA%E5%8A%A8%E5%8C%96%E8%84%9A%E6%9C%AC.js",
    当前版本: "1.0.2"
};

// === 剪映自动化脚本 - 按钮选择调试版 ===
// 作者：小猫剪映自动化

// === 调试开关 ===
var 调试模式 = true;
var 直接跳转到步骤 = 10;
var 循环次数 = 1; // 默认循环1次

// 全局变量
var 悬浮窗 = null;
var 日志内容 = "✅ 准备就绪..."; // 初始化日志内容

// 先询问循环次数
var 循环输入框 = dialogs.rawInput("请输入循环次数", "1");
if (循环输入框 && 循环输入框 !== "") {
    循环次数 = parseInt(循环输入框) || 1;
}

// 创建主悬浮窗
悬浮窗 = floaty.window(
    <frame bg="#DD000000">
        <vertical padding="12" w="180">
            <text text="🎬 剪映自动化" textSize="16sp" textColor="#FFFFFF" bg="#34495E" padding="8 12" w="*" gravity="center"/>
            <text id="日志" text="{日志内容}" textSize="12sp" textColor="#00FF00" padding="6" lineHeight="15" maxLines="6" bg="#2C3E50"/>
            
            <text text="📋 选择调试步骤:" textSize="12sp" textColor="#FFFFFF" padding="4 0" marginTop="4"/>
            
            <!-- 第一行步骤按钮 -->
            <horizontal>
                <button id="步骤1" text="1" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤2" text="2" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤3" text="3" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤4" text="4" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤5" text="5" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
            </horizontal>
            
            <!-- 第二行步骤按钮 -->
            <horizontal>
                <button id="步骤6" text="6" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤7" text="7" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤8" text="8" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤9" text="9" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤10" text="10" w="28" h="28" bg="#3498DB" textColor="#FFFFFF" textSize="8sp"/>
            </horizontal>
            
            <!-- 第三行步骤按钮 -->
            <horizontal>
                <button id="步骤11" text="11" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤12" text="12" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤13" text="13" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤14" text="14" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤15" text="15" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
            </horizontal>
            
            <!-- 第四行步骤按钮 -->
            <horizontal>
                <button id="步骤16" text="16" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤17" text="17" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤18" text="18" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤19" text="19" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
                <button id="步骤20" text="20" w="28" h="28" bg="#7F8C8D" textColor="#FFFFFF" textSize="8sp"/>
            </horizontal>
            
            <!-- 控制按钮 -->
            <horizontal gravity="center" marginTop="8">
                <button id="完整运行" text="🎬 完整运行" w="85" h="36" bg="#27AE60" textColor="#FFFFFF" textSize="11sp" marginRight="6"/>
                <button id="停止" text="🛑 停止" w="85" h="36" bg="#E74C3C" textColor="#FFFFFF" textSize="11sp"/>
            </horizontal>
            
            <!-- 更新按钮 -->
            <button id="手动更新" text="🔄 检查更新" w="*" h="32" bg="#2980B9" textColor="#FFFFFF" textSize="11sp" marginTop="6"/>
        </vertical>
    </frame>
);

悬浮窗.setPosition(50, 100);

// 等待悬浮窗完全创建
sleep(1000);

// 初始化日志显示
更新日志显示();

// 步骤按钮点击事件
for (var i = 1; i <= 20; i++) {
    (function(步骤编号) {
        悬浮窗["步骤" + 步骤编号].click(function() {
            // 重置所有按钮颜色
            for (var j = 1; j <= 20; j++) {
                悬浮窗["步骤" + j].setBackgroundColor(colors.parseColor("#7F8C8D"));
            }
            // 设置当前选中按钮颜色
            悬浮窗["步骤" + 步骤编号].setBackgroundColor(colors.parseColor("#3498DB"));
            
            直接跳转到步骤 = 步骤编号;
            显示日志("🚀 选择第" + 步骤编号 + "步");
            调试模式 = true;
            threads.start(function() {
                主程序();
            });
        });
    })(i);
}

// 控制按钮点击事件
悬浮窗.完整运行.click(function() {
    显示日志("🎬 开始完整运行脚本");
    调试模式 = false;
    threads.start(function() {
        主程序();
    });
});

悬浮窗.停止.click(function() {
    显示日志("🛑 手动停止脚本");
    exit();
});

// 更新按钮点击事件
悬浮窗.手动更新.click(function() {
    显示日志("🔍 手动检查更新...");
    threads.start(function() {
        手动检查更新();
    });
});

// 显示欢迎信息
显示日志("✅ 脚本加载完成");
显示日志("🔄 循环次数: " + 循环次数 + " 次");
显示日志("💡 点击步骤按钮开始调试");

// 手动检查更新函数
function 手动检查更新() {
    threads.start(function() {
        try {
            显示日志("🔄 检查更新中...");
            
            var 响应 = http.get(更新配置.脚本直链, {
                timeout: 10000
            });
            
            if (响应.statusCode !== 200) {
                显示日志("❌ 检查更新失败");
                return;
            }
            
            var 网络脚本 = 响应.body.string();
            var 当前脚本 = engines.myEngine().getSource() + "";
            
            // 简单比较前100个字符
            if (网络脚本.substring(0, 100) !== 当前脚本.substring(0, 100)) {
                显示日志("🎉 发现新版本！");
                
                // 询问是否更新
                var 是否更新 = confirm("发现新版本，是否更新？");
                if (是否更新) {
                    var 文件路径 = "/sdcard/剪映自动化脚本.js";
                    files.write(文件路径, 网络脚本);
                    显示日志("✅ 更新完成，正在重启...");
                    sleep(2000);
                    engines.execScriptFile(文件路径);
                    exit();
                }
            } else {
                显示日志("✅ 当前已是最新版本");
            }
        } catch (e) {
            显示日志("❌ 更新检查出错");
        }
    });
}

// 主程序函数
function 主程序() {
    try {
        if (调试模式) {
            显示日志("🔧 调试模式 - 直接执行第" + 直接跳转到步骤 + "步");
            
            switch(直接跳转到步骤) {
                case 1: 执行第一步(); break;
                case 2: 执行第二步(); break;
                case 3: 执行第三步(); break;
                case 4: 执行第四步(); break;
                case 5: 执行第五步(); break;
                case 6: 执行第六步(); break;
                case 7: 执行第七步(); break;
                case 8: 执行第八步(); break;
                case 9: 执行第九步(); break;
                case 10: 执行第十步(); break;
                case 11: 执行第十一步(); break;
                case 12: 执行第十二步(); break;
                case 13: 执行第十三步(); break;
                case 14: 执行第十四步(); break;
                case 15: 执行第十五步(); break;
                case 16: 执行第十六步(); break;
                case 17: 执行第十七步(); break;
                case 18: 执行第十八步(); break;
                case 19: 执行第十九步(); break;
                case 20: 执行第二十步(); break;
                default:
                    显示日志("❌ 未知的步骤编号: " + 直接跳转到步骤);
            }
            return;
        }
        
        // === 完整脚本开始 ===
        显示日志("🎬 完整脚本开始执行");
        执行第一步();
        执行第二步();
        执行第三步();
        执行第四步();
        执行第五步();
        执行第六步();
        执行第七步();
        执行第八步();
        执行第九步();
        执行第十步();
        执行第十一步();
        执行第十二步();
        执行第十三步();
        执行第十四步();
        执行第十五步();
        执行第十六步();
        执行第十七步();
        执行第十八步();
        执行第十九步();
        执行第二十步();
        
        显示日志("🎉 所有步骤执行完成！");

    } catch (e) {
        显示日志("❌ 脚本执行出错: " + e);
    }
}

// 安全的显示日志函数
function 显示日志(信息) {
    // 更新日志内容
    日志内容 += "\n" + 信息;
    
    // 限制日志行数
    var 日志行数 = 日志内容.split("\n");
    if(日志行数.length > 6){
        日志内容 = 日志行数.slice(-6).join("\n");
    }
    
    // 更新界面显示
    更新日志显示();
}

// 更新日志显示（安全的）
function 更新日志显示() {
    try {
        if (悬浮窗 && 悬浮窗.日志) {
            ui.run(function() {
                悬浮窗.日志.setText(日志内容);
            });
        }
    } catch (e) {
        console.log("更新日志显示出错: " + e);
    }
}

// 安全的选择器函数
function 安全查找文本(文本内容, 超时时间) {
    try {
        return text(文本内容).findOne(超时时间 || 1000);
    } catch (e) {
        显示日志("❌ 文本查找错误: " + e);
        return null;
    }
}

function 安全查找描述(描述内容, 超时时间) {
    try {
        return desc(描述内容).findOne(超时时间 || 1000);
    } catch (e) {
        显示日志("❌ 描述查找错误: " + e);
        return null;
    }
}

// 强制停止单个应用的函数
function 强制停止单个应用(应用包名, 应用名称) {
    显示日志("📱 正在打开" + 应用名称 + "应用信息...");
    
    home();
    sleep(2000);
    
    app.openAppSetting(应用包名);
    sleep(5000);
    
    显示日志("🔄 寻找" + 应用名称 + "强制停止按钮");
    var 停止按钮文字 = ["强制停止", "结束运行", "停止"];
    var 找到按钮 = false;

    for (var i = 0; i < 停止按钮文字.length; i++) {
        var 按钮文字 = 停止按钮文字[i];
        var 按钮元素 = 安全查找文本(按钮文字);
        if (按钮元素) {
            显示日志("找到文字: " + 按钮文字);
            var 按钮位置 = 按钮元素.bounds();
            click(按钮位置.centerX(), 按钮位置.centerY());
            显示日志("✅ 点击了" + 应用名称 + "强制停止按钮");
            找到按钮 = true;
            sleep(3000);
            break;
        }
    }

    if (!找到按钮) {
        显示日志("❌ 未找到" + 应用名称 + "强制停止按钮");
        back();
        sleep(2000);
        home();
        sleep(2000);
        return false;
    }

    显示日志("📢 寻找" + 应用名称 + "确认按钮");
    sleep(3000);
    var 确认按钮文字 = ["确定", "确认", "OK", "强行停止"];
    var 找到确认按钮 = false;

    for (var i = 0; i < 确认按钮文字.length; i++) {
        var 按钮文字 = 确认按钮文字[i];
        var 按钮元素 = 安全查找文本(按钮文字);
        if (按钮元素) {
            显示日志("找到确认文字: " + 按钮文字);
            var 按钮位置 = 按钮元素.bounds();
            click(按钮位置.centerX(), 按钮位置.centerY());
            显示日志("✅ 点击了" + 应用名称 + "确认按钮");
            找到确认按钮 = true;
            sleep(2000);
            break;
        }
    }

    if (!找到确认按钮) {
        显示日志("文字识别失败，尝试坐标点击确认");
        click(device.width * 0.8, device.height * 0.7);
        sleep(1000);
    }

    显示日志("🏠 返回桌面准备下一个操作");
    for (var i = 0; i < 3; i++) {
        back();
        sleep(1000);
    }
    home();
    sleep(3000);
    
    return true;
}

// 改进的循环查找函数
function 循环查找按钮(按钮名称, 步骤名称, 超时时间) {
    显示日志("🔍 开始" + 步骤名称);
    
    var 找到按钮 = false;
    var 开始时间 = new Date().getTime();
    var 超时时间 = 超时时间 || 30000;

    while (!找到按钮 && (new Date().getTime() - 开始时间 < 超时时间)) {
        var 按钮元素 = 安全查找文本(按钮名称) || 安全查找描述(按钮名称);
        
        if (按钮元素) {
            显示日志("🎯 找到" + 按钮名称 + "按钮");
            var 边界 = 按钮元素.bounds();
            if (边界.centerX() > 0 && 边界.centerY() > 0) {
                按钮元素.click();
                显示日志("✅ 成功点击" + 按钮名称 + "按钮");
                找到按钮 = true;
                sleep(2000);
            }
        } else {
            var 已等待秒数 = Math.floor((new Date().getTime() - 开始时间) / 1000);
            if (已等待秒数 % 2 === 0) {
                显示日志("⏳ " + 步骤名称 + "中... 已等待 " + 已等待秒数 + " 秒");
            }
        }
        sleep(500);
    }

    if (!找到按钮) {
        显示日志("⏰ " + 超时时间/1000 + "秒内未找到" + 按钮名称 + "按钮");
    }
    
    return 找到按钮;
}

// === 步骤函数定义（包含实际操作）===
function 执行第一步() {
    显示日志("🚫 执行第一步：停止抖音应用");
    强制停止单个应用("com.ss.android.ugc.aweme", "抖音");
    显示日志("✅ 第一步完成");
}

function 执行第二步() {
    显示日志("🚫 执行第二步：停止剪映应用");
    强制停止单个应用("com.lemon.lv", "剪映");
    显示日志("✅ 第二步完成");
}

function 执行第三步() {
    显示日志("🚀 执行第三步：启动剪映APP");
    launch("com.lemon.lv");
    sleep(5000);
    显示日志("✅ 第三步完成");
}

function 执行第四步() {
    显示日志("📝 执行第四步：处理启动弹窗");
    sleep(2000);
    显示日志("✅ 第四步完成");
}

function 执行第五步() {
    显示日志("🔄 执行第五步：点击立即恢复按钮");
    循环查找按钮("立即恢复", "查找立即恢复按钮", 30000);
    显示日志("✅ 第五步完成");
}

function 执行第六步() {
    显示日志("📤 执行第六步：点击导出按钮");
    循环查找按钮("导出", "查找导出按钮", 30000);
    sleep(3000);
    显示日志("✅ 第六步完成");
}

function 执行第七步() {
    显示日志("✂️ 执行第七步：点击剪辑按钮");
    var 找到剪辑 = false;
    var 开始时间 = new Date().getTime();
    var 超时时间 = 30000;

    while (!找到剪辑 && (new Date().getTime() - 开始时间 < 超时时间)) {
        var 剪辑按钮 = text("剪辑").findOne(500) || desc("剪辑").findOne(500);
        
        if (剪辑按钮) {
            显示日志("🎯 找到剪辑按钮，准备点击");
            var 边界 = 剪辑按钮.bounds();
            
            if (边界.centerX() > 0 && 边界.centerY() > 0) {
                var 点击X = 边界.centerX();
                var 点击Y = 边界.centerY();
                
                显示日志("🖱️ 点击位置: " + 点击X + ", " + 点击Y);
                click(点击X, 点击Y);
                显示日志("✅ 已执行点击操作");
                sleep(3000);
                
                var 剪辑页面元素 = text("音频").findOne(1000) || text("文本").findOne(1000) || text("贴纸").findOne(1000);
                
                if (剪辑页面元素) {
                    显示日志("🎊 成功进入剪辑页面！");
                    找到剪辑 = true;
                    break;
                } else {
                    显示日志("🔄 尝试第二次点击");
                    click(点击X, 点击Y);
                    sleep(3000);
                    
                    剪辑页面元素 = text("音频").findOne(1000) || text("文本").findOne(1000) || text("贴纸").findOne(1000);
                    if (剪辑页面元素) {
                        显示日志("🎊 第二次点击成功进入剪辑页面！");
                        找到剪辑 = true;
                        break;
                    }
                }
            }
        } else {
            var 已等待秒数 = Math.floor((new Date().getTime() - 开始时间) / 1000);
            if (已等待秒数 % 3 === 0) {
                显示日志("⏳ 搜索剪辑按钮中... 已等待 " + 已等待秒数 + " 秒");
            }
            sleep(1000);
        }
    }

    if (!找到剪辑) {
        显示日志("⏰ 30秒内未成功进入剪辑页面");
    } else {
        显示日志("🚀 剪辑页面加载完成");
        sleep(2000);
    }
}

function 执行第八步() {
    显示日志("🔄 执行第八步：滑动操作");
    sleep(3000);
    显示日志("📏 执行滑动至段尾");
    try {
        swipe(946, 1660, 12, 1643, 200);
        显示日志("✅ 滑动完成");
    } catch (e) {
        显示日志("❌ 滑动操作错误: " + e);
    }
    sleep(3000);
}

function 执行第九步() {
    显示日志("➕ 执行第九步：点击+号按钮");
    var 找到加号 = false;
    var 开始时间 = new Date().getTime();
    var 超时时间 = 30000;

    while (!找到加号 && (new Date().getTime() - 开始时间 < 超时时间)) {
        显示日志("尝试坐标点击+号");
        var 中心X = (897 + 1065) / 2;
        var 中心Y = (1520 + 1792) / 2;
        
        显示日志("点击坐标: " + 中心X + ", " + 中心Y);
        click(中心X, 中心Y);
        sleep(3000);
        
        if (text("照片").findOne(1000) || text("视频").findOne(1000) || text("导入").findOne(1000)) {
            显示日志("🎊 成功打开素材页面！");
            找到加号 = true;
            break;
        } else {
            显示日志("❌ 坐标点击未成功，尝试其他位置");
            var 其他位置 = [
                [device.width * 0.5, device.height * 0.95],
                [device.width * 0.9, device.height * 0.95],
                [device.width * 0.1, device.height * 0.95],
            ];
            
            for (var i = 0; i < 其他位置.length; i++) {
                var 位置 = 其他位置[i];
                显示日志("尝试位置: " + 位置[0] + ", " + 位置[1]);
                click(位置[0], 位置[1]);
                sleep(3000);
                
                if (text("照片").findOne(1000) || text("视频").findOne(1000)) {
                    显示日志("🎊 其他位置点击成功！");
                    找到加号 = true;
                    break;
                }
            }
        }
        
        if (找到加号) break;
        sleep(2000);
    }

    if (!找到加号) {
        显示日志("⏰ 30秒内未找到+号");
    } else {
        显示日志("🚀 +号点击成功");
    }
}

function 执行第十步() {
    显示日志(" 执行第十步：选择视频复选框");

    // 读取上次选择的索引
    var 存储文件 = "/sdcard/视频选择索引.txt";
    var 当前索引 = 0;

    try {
        if (files.exists(存储文件)) {
            var 内容 = files.read(存储文件);
            当前索引 = parseInt(内容) || 0;
            显示日志("读取到上次索引: " + 当前索引);
        } else {
            显示日志("未找到存储文件，使用默认索引: 0");
        }
    } catch (e) {
        显示日志("读取存储文件失败: " + e);
        当前索引 = 0;
    }

    // 先更新索引为下一个视频
    var 新索引 = 当前索引 + 1;
    
    // 如果超出范围，循环回到第一个
    if (新索引 >= 18) { // 假设最多18个视频
        新索引 = 0;
        显示日志("🎯 已选择最后一个视频，下次将回到第一个视频");
    }
    
    // 立即保存新索引
    try {
        files.write(存储文件, 新索引.toString());
        显示日志("✅ 更新索引: " + 当前索引 + " → " + 新索引);
    } catch (e) {
        显示日志("❌ 保存索引失败: " + e);
    }

    显示日志("本次选择第 " + (新索引 + 1) + " 个视频的复选框");

    // 完全关闭悬浮窗避免遮挡
    try {
        悬浮窗.close();
        显示日志("📱 关闭悬浮窗避免遮挡");
    } catch (e) {
        显示日志("❌ 关闭悬浮窗失败: " + e);
    }
    sleep(2000);

    var 找到复选框 = false;
    
    // 先等待页面稳定
    sleep(3000);

    // 方法：通过视频时长精确定位
    var 时长元素 = textMatches(/\d{1,2}:\d{2}/).find();
    显示日志("找到 " + 时长元素.size() + " 个时长元素");

    if (时长元素.size() === 0) {
        显示日志(" 未找到时长元素");
        // 重新创建悬浮窗
        重新创建悬浮窗();
        return;
    }

    // 按位置排序
    var 排序后的时长 = [];
    for (var i = 0; i < 时长元素.size(); i++) {
        排序后的时长.push(时长元素.get(i));
    }
    
    排序后的时长.sort(function(a, b) {
        var a边界 = a.bounds();
        var b边界 = b.bounds();
        if (Math.abs(a边界.top - b边界.top) < 50) {
            return a边界.left - b边界.left;
        }
        return a边界.top - b边界.top;
    });

    // 确保新索引有效
    if (新索引 >= 排序后的时长.length) {
        显示日志("新索引 " + 新索引 + " 超出范围，使用第一个视频");
        新索引 = 0;
        // 更新文件中的索引
        try {
            files.write(存储文件, "0");
        } catch (e) {}
    }

    if (排序后的时长.length > 新索引) {
        var 目标时长 = 排序后的时长[新索引];
        var 时长边界 = 目标时长.bounds();
        
        显示日志(" 选择第" + (新索引 + 1) + "个视频");
        显示日志("时长: " + 目标时长.text() + " 位置: " + 时长边界);

        // 基于时长位置计算点击坐标
        var 点击X = 时长边界.right - 50;
        var 点击Y = 时长边界.top - 100;
        
        显示日志("点击位置: " + 点击X + ", " + 点击Y);
        
        // 只点击一次！
        click(点击X, 点击Y);
        显示日志(" 点击视频复选框位置 - 只点击一次");
        sleep(3000);
        
        // 检查是否选中
        var 选中标识 = text("1").findOne(2000);
        if (选中标识) {
            显示日志(" 成功选中！");
            找到复选框 = true;
        } else {
            显示日志(" 未选中，但索引已更新到下一个视频");
        }
    } else {
        显示日志(" 视频数量不足");
    }

    // 重新创建悬浮窗 - 确保执行
    重新创建悬浮窗();

    if (!找到复选框) {
        显示日志(" 本次选择未成功，但下次会继续下一个视频");
    } else {
        显示日志(" 视频选择完成");
    }
}

// 简化重新创建悬浮窗函数
function 重新创建悬浮窗() {
    显示日志("🔄 正在重新创建悬浮窗...");
    
    try {
        // 重新创建悬浮窗
        悬浮窗 = floaty.window(
            <frame bg="#DD000000">
                <vertical padding="8">
                    <text text="剪映自动化" textSize="16sp" textColor="#FFFFFF" bg="#444444" padding="4 8" w="*"/>
                    <text id="日志" text="准备就绪..." textSize="14sp" textColor="#00FF00" padding="4" lineHeight="18" maxLines="6"/>
                    
                    <text text="选择调试步骤:" textSize="14sp" textColor="#FFFFFF" padding="4 0"/>
                    
                    <!-- 步骤按钮行 -->
                    <horizontal>
                        <button id="步骤1" text="1" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤2" text="2" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤3" text="3" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤4" text="4" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤5" text="5" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                    </horizontal>
                    
                    <horizontal>
                        <button id="步骤6" text="6" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤7" text="7" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤8" text="8" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤9" text="9" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤10" text="10" w="28" h="28" bg="#4444FF" textColor="#FFFFFF" textSize="10sp"/>
                    </horizontal>
                    
                    <horizontal>
                        <button id="步骤11" text="11" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤12" text="12" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤13" text="13" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤14" text="14" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤15" text="15" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                    </horizontal>
                    
                    <horizontal>
                        <button id="步骤16" text="16" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤17" text="17" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤18" text="18" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤19" text="19" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                        <button id="步骤20" text="20" w="28" h="28" bg="#666666" textColor="#FFFFFF" textSize="10sp"/>
                    </horizontal>
                    
                    <!-- 控制按钮 -->
                    <horizontal>
                        <button id="完整运行" text="完整运行" w="80" h="35" bg="#44AA44" textColor="#FFFFFF" textSize="12sp"/>
                        <button id="停止" text="停止脚本" w="80" h="35" bg="#FF4444" textColor="#FFFFFF" textSize="12sp"/>
                    </horizontal>
                </vertical>
            </frame>
        );

        悬浮窗.setPosition(50, 100);

        // 重新绑定按钮事件
        for (var i = 1; i <= 20; i++) {
            悬浮窗["步骤" + i].click((function(步骤编号) {
                return function() {
                    // 重置所有按钮颜色
                    for (var j = 1; j <= 20; j++) {
                        悬浮窗["步骤" + j].setBackgroundColor(colors.parseColor("#666666"));
                    }
                    // 设置当前选中按钮颜色
                    悬浮窗["步骤" + 步骤编号].setBackgroundColor(colors.parseColor("#4444FF"));
                    
                    直接跳转到步骤 = 步骤编号;
                    显示日志("🚀 选择第" + 步骤编号 + "步");
                    调试模式 = true;
                    threads.start(function() {
                        主程序();
                    });
                };
            })(i));
        }

        // 重新绑定控制按钮事件
        悬浮窗.完整运行.click(() => {
            显示日志("🎬 完整运行脚本");
            调试模式 = false;
            threads.start(function() {
                主程序();
            });
        });

        悬浮窗.停止.click(() => {
            显示日志("🛑 手动停止脚本");
            exit();
        });
        
        显示日志("✅ 悬浮窗重新创建完成");
        
    } catch (e) {
        显示日志("❌ 重新创建悬浮窗失败: " + e);
    }
}

function 执行第十一步() {
    显示日志("🔍 执行第十一步：点击选择按钮");
    
    var 选择按钮 = 安全查找文本("选择") || 安全查找描述("选择");
    if (选择按钮) {
        显示日志("🎯 找到'选择'按钮");
        var 选择边界 = 选择按钮.bounds();
        click(选择边界.centerX(), 选择边界.centerY());
        显示日志("✅ 成功点击'选择'按钮");
        sleep(1000);
    } else {
        显示日志("❌ 未找到'选择'按钮");
    }
}





function 执行第十二步() {
    显示日志("🔍 执行第十二步：直接查找确认按钮");
    
    // 方法1：直接查找所有包含"确认"的文字
    var 所有确认按钮 = textContains("确认").find();
    if (所有确认按钮.size() > 0) {
        var 按钮 = 所有确认按钮.get(0);
        显示日志("🎯 找到确认按钮，文字: " + (按钮.text() || ""));
        var 边界 = 按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击确认按钮成功");
        sleep(1000);
        显示日志("🚀 第十二步完成");
        return;
    }
    
    // 方法2：查找描述包含"确认"的
    var 所有描述确认 = descContains("确认").find();
    if (所有描述确认.size() > 0) {
        var 按钮 = 所有描述确认.get(0);
        显示日志("🎯 通过描述找到确认按钮");
        var 边界 = 按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击确认按钮成功");
        sleep(1000);
        显示日志("🚀 第十二步完成");
        return;
    }
    
    // 方法3：查找数字"1"（您之前看到的"确认（1）"）
    var 带数字的按钮 = textMatches(/.*1.*/).find();
    if (带数字的按钮.size() > 0) {
        for (var i = 0; i < 带数字的按钮.size(); i++) {
            var 按钮 = 带数字的按钮.get(i);
            var 按钮文字 = 按钮.text() || "";
            if (按钮文字.includes("确认")) {
                显示日志("🎯 找到带数字的确认按钮: " + 按钮文字);
                var 边界 = 按钮.bounds();
                click(边界.centerX(), 边界.centerY());
                显示日志("✅ 点击确认按钮成功");
                sleep(1000);
                显示日志("🚀 第十二步完成");
                return;
            }
        }
    }
    
    显示日志("❌ 未找到确认按钮");
    显示日志("⚠️ 请确认页面是否已加载确认按钮");
}

function 执行第十三步() {
    显示日志("🔙 执行第十三步：点击左上角返回");
    
    // 使用成功的坐标
    var 点击X = 20;
    var 点击Y = 1656;
    
    显示日志("点击坐标: " + 点击X + ", " + 点击Y);
    click(点击X, 点击Y);
    显示日志("✅ 点击左上角返回成功");
    sleep(2000);
    
    显示日志("🚀 第十三步完成 - 返回操作执行成功");
}

function 执行第十四步() {
    显示日志("🗑️ 执行第十四步：点击删除按钮");
    var 删除按钮 = text("删除").findOne(3000) || desc("删除").findOne(3000);
    if (删除按钮) {
        显示日志("🎯 找到删除按钮");
        var 边界 = 删除按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击删除按钮成功");
        sleep(2000);
    } else {
        显示日志("❌ 未找到删除按钮");
    }
}

function 执行第十五步() {
    显示日志("💾 执行第十五步：点击保存按钮");
    var 保存按钮 = text("保存").findOne(3000) || desc("保存").findOne(3000);
    if (保存按钮) {
        显示日志("🎯 找到保存按钮");
        var 边界 = 保存按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击保存按钮成功");
        sleep(2000);
    } else {
        显示日志("❌ 未找到保存按钮");
    }
}

function 执行第十六步() {
    显示日志("➡️ 执行第十六步：点击下一步按钮");
    var 下一步按钮 = text("下一步").findOne(3000) || desc("下一步").findOne(3000);
    if (下一步按钮) {
        显示日志("🎯 找到下一步按钮");
        var 边界 = 下一步按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击下一步按钮成功");
        sleep(2000);
    } else {
        显示日志("❌ 未找到下一步按钮");
    }
}

function 执行第十七步() {
    显示日志("📤 执行第十七步：点击发作品按钮");
    var 发作品按钮 = text("发作品").findOne(3000) || desc("发作品").findOne(3000);
    if (发作品按钮) {
        显示日志("🎯 找到发作品按钮");
        var 边界 = 发作品按钮.bounds();
        click(边界.centerX(), 边界.centerY());
        显示日志("✅ 点击发作品按钮成功");
        sleep(2000);
    } else {
        显示日志("❌ 未找到发作品按钮");
    }
}

function 执行第十八步() {
    显示日志("↩️ 执行第十八步：循环查找返回剪映按钮");
    var 找到返回剪映 = false;
    var 开始时间 = new Date().getTime();
    var 超时时间 = 120000; // 2分钟
    
    while (!找到返回剪映 && (new Date().getTime() - 开始时间 < 超时时间)) {
        var 返回剪映按钮 = text("返回剪映").findOne(1000) || desc("返回剪映").findOne(1000);
        
        if (返回剪映按钮) {
            显示日志("🎯 找到返回剪映按钮");
            var 边界 = 返回剪映按钮.bounds();
            click(边界.centerX(), 边界.centerY());
            显示日志("✅ 点击返回剪映按钮成功");
            找到返回剪映 = true;
            sleep(2000);
            break;
        }
        
        // 每10秒显示一次等待状态
        var 已等待秒数 = Math.floor((new Date().getTime() - 开始时间) / 1000);
        if (已等待秒数 % 10 === 0) {
            显示日志("⏳ 查找返回剪映按钮中... 已等待 " + 已等待秒数 + " 秒");
        }
        
        sleep(2000); // 每2秒查找一次
    }
    
    if (找到返回剪映) {
        显示日志("🚀 第十八步完成 - 成功返回剪映");
    } else {
        显示日志("⏰ 第十八步完成 - 2分钟内未找到返回剪映按钮");
    }
}

function 执行第十九步() {
    显示日志("📱 执行第十九步：循环查找分享到抖音按钮");
    var 找到分享按钮 = false;
    var 开始时间 = new Date().getTime();
    var 超时时间 = 120000; // 2分钟
    
    while (!找到分享按钮 && (new Date().getTime() - 开始时间 < 超时时间)) {
        var 分享按钮 = text("分享到抖音").findOne(1000) || desc("分享到抖音").findOne(1000);
        
        if (分享按钮) {
            显示日志("🎯 找到分享到抖音按钮");
            var 边界 = 分享按钮.bounds();
            click(边界.centerX(), 边界.centerY());
            显示日志("✅ 点击分享到抖音按钮成功");
            找到分享按钮 = true;
            sleep(2000);
            break;
        }
        
        // 每10秒显示一次等待状态
        var 已等待秒数 = Math.floor((new Date().getTime() - 开始时间) / 1000);
        if (已等待秒数 % 10 === 0) {
            显示日志("⏳ 查找分享到抖音按钮中... 已等待 " + 已等待秒数 + " 秒");
        }
        
        sleep(2000); // 每2秒查找一次
    }
    
    if (找到分享按钮) {
        显示日志("🚀 第十九步完成 - 成功点击分享到抖音");
    } else {
        显示日志("⏰ 第十九步完成 - 2分钟内未找到分享到抖音按钮");
    }
}

function 执行第二十步() {
    显示日志("🔄 执行第二十步：循环执行第7-19步");
    显示日志("📊 开始循环，总共 " + 循环次数 + " 次");
    
    for (var 当前循环 = 1; 当前循环 <= 循环次数; 当前循环++) {
        显示日志("🎯 开始第 " + 当前循环 + "/" + 循环次数 + " 次循环");
        
        // 执行第7步到第19步
        执行第七步();
        执行第八步();
        执行第九步();
        执行第十步();
        执行第十一步();
        执行第十二步();
        执行第十三步();
        执行第十四步();
        执行第十五步();
        执行第十六步();
        执行第十七步();
        执行第十八步();
        执行第十九步();
        
        if (当前循环 < 循环次数) {
            显示日志("⏳ 等待3秒后开始下一次循环...");
            sleep(3000);
        }
    }
    
    显示日志("🎉 第二十步完成 - 所有循环执行完毕！");
}

// 保持脚本运行
while (true) {
    sleep(1000);
}