/*
Navicat MySQL Data Transfer

Source Server         : bootStrap
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2019-12-06 12:22:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carousel
-- ----------------------------
DROP TABLE IF EXISTS `carousel`;
CREATE TABLE `carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgPath` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carousel
-- ----------------------------
INSERT INTO `carousel` VALUES ('1', 'Carousel1.jpg');
INSERT INTO `carousel` VALUES ('2', 'Carousel2.jpg');
INSERT INTO `carousel` VALUES ('3', 'Carousel3.jpg');
INSERT INTO `carousel` VALUES ('4', 'Carousel4.jpg');
INSERT INTO `carousel` VALUES ('5', 'Carousel5.jpg');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `remark` text NOT NULL COMMENT '备注',
  `evaluation` longtext NOT NULL,
  `time` datetime NOT NULL,
  `color` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `stock` int(50) NOT NULL DEFAULT '20',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '一亿像素 五摄四闪', '1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器', '2019-12-03 13:05:38', '魔法绿镜*冰雪极光*暗夜魅影', '手机', '20');
INSERT INTO `goods` VALUES ('2', '小米9  Pro 5G', 'mi9Pro5G.jpg', '3699.00', '5G双卡全网通，骁龙855Pro', 'G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 40W有线闪充+30W无线闪充+10W无线反充，4000mAh长续航 / 4800万全焦段三摄 / 超振感横向线性马达 / VC液冷散热 / 高色准三星AMOLED屏幕 / 多功能NFC / 赠送小米云服务1TB云存储', '2019-12-03 13:09:41', '钛银黑*梦之白', '手机', '20');
INSERT INTO `goods` VALUES ('3', 'Redmi Note 8', 'Redmi Note 8.jpg', '999.00', '千元4800万四摄', '800万全场景四摄 / 前置1300万美颜相机 / 骁龙665处理器 / 4000mAh超长续航 / 标配18W快充 / 超线性扬声器 / 90%高屏占比 / 康宁大猩猩保护玻璃 / 6.3英寸水滴全面屏', '2019-12-03 16:24:51', '钛银黑*梦之白', '手机', '20');
INSERT INTO `goods` VALUES ('4', '米家互联网空调C1', 'miHomeC1.jpg', '2199.00', '变频节能省电，自清洁', '1.5匹 / 自清洁 / 全直流变频节能省电 / 高效制冷热 / 静音设计 / 全屋互联 / 售后无忧 / 官网购买，免预约安装，签收后服务人员主动联系', '2019-12-03 16:39:29', '白', '电视', '20');
INSERT INTO `goods` VALUES ('5', 'Ruby15.6\" 集显版', 'Ruby15.6.jpg', '4799.00', '高速固态硬盘', '高速固态硬盘 / 独立数字键盘 / 全面均衡的国民轻薄本', '2019-12-03 16:58:45', '灰*白', '笔记本', '20');
INSERT INTO `goods` VALUES ('6', '米家新风机A1', 'miHomeNewfengji.jpg', '1799.00', '150m³/h 纯净风量', '150m³/h 纯净风量，适用面积≤53㎡ / 高效抗霾除醛，换气富氧 / 节能轻音，24小时运行约8天用1度电 / PTC辅助加热，寒冷天气，柔和出风\r\n\r\n150m³/h 纯净风量，适用面积≤53㎡ / 高效抗霾除醛，换气富氧 / 节能轻音，24小时运行约8天用1度电 / PTC辅助加热，寒冷天气，柔和出风', '2019-12-04 10:05:12', '白', '家电', '20');
INSERT INTO `goods` VALUES ('7', '知吾煮汤锅 米家定制', 'zhiwuzhu.jpg', '99.00', '聚热快，受热匀 / 食品级不粘涂层', '聚热快，受热匀 / 食品级不粘涂层', '2019-12-04 10:37:01', '白', '家电', '20');
INSERT INTO `goods` VALUES ('8', '米家风冷三门冰箱', 'bingxing.jpg', '1699.00', '210L实用大容量', '210L实用大容量 / 风冷无霜不结冰 / 三门三温区，满足不同食材保鲜需求 / 加西贝拉压缩机，制冷性能稳定强劲 / 独立微冻室，食材单独存放少串味', '2019-12-04 10:39:41', '银', '家电', '20');
INSERT INTO `goods` VALUES ('9', '小米USB-C数据线', 'shujyxian.jpg', '19.90', '高强度纤维编制线体', '高强度纤维编制线体 / 一体化接口设计 / 结实耐用', '2019-12-04 10:55:22', '黑*红', '配件', '20');
INSERT INTO `goods` VALUES ('10', '小米9 街头风保护壳', 'mi9box.jpg', '49.00', '时尚多彩 / 细节出众 ', '时尚多彩 / 细节出众 / 纤薄轻巧 / 是腕带也是支架', '2019-12-04 10:57:54', '黑*红*紫', '配件', '20');
INSERT INTO `goods` VALUES ('11', '小米CC9e果冻保护壳', 'micc9Box.jpg', '49.00', '潮流荧光色，尽显时尚大咖风采', '潮流荧光色，尽显时尚大咖风采 / 简约而不简单，设计感十足 / 纤薄轻巧无负担 / 精准开孔，全面贴合机身', '2019-12-04 11:00:58', '荧光粉*荧光绿*荧光橙', '配件', '20');
INSERT INTO `goods` VALUES ('12', '小米笔记本Air', 'Air.jpg', '4999.00', '轻薄全金属机身 ', '轻薄全金属机身 / MX250独立显卡 / 9.5小时超长续航 / FHD全高清屏幕 / 指纹解锁 / 兼顾办公娱乐与轻薄的高性能笔记本', '2019-12-05 22:08:57', '白色', '笔记本', '20');
INSERT INTO `goods` VALUES ('13', '游戏本2019款', 'Air1.jpg', '9499.00', '九代酷睿标压处理器 ', '九代酷睿标压处理器 / 144Hz 刷新率 / 3+2包围式热管 / 12V 台机级别散热风扇 / 72%色域', '2019-12-05 22:11:35', '黑色', '笔记本', '20');
INSERT INTO `goods` VALUES ('14', '小米路由器AC2100', 'roult1.jpg', '229.00', '2100M高速路由', '2100M高速路由 / 全终端游戏加速 / 全千兆网口 / 双核CPU高速并发多任务 / 360°隐藏天线 / 全方向均匀覆盖', '2019-12-05 22:15:16', '黑色', '路由器', '20');
INSERT INTO `goods` VALUES ('15', '小米路由器Mesh', 'roult2.jpg', '999.00', '多通道高速混合传输', '多通道高速混合传输 / 高通4核CPU / 4颗独立信号放大器 / 256MB超大内存 / 千兆电力线 / 不分子母 / 专为小米智能家居优化', '2019-12-05 22:16:49', '黑色', '路由器', '20');
INSERT INTO `goods` VALUES ('16', '小米路由器4A千兆版', 'roult3.jpg', '119.00', '双核CPU千兆网口', '双核CPU千兆网口 ／ 双频AC1200 ／ 高增益4天线 ／ 128MB大内存 ／ 安全防蹭网 ／ 儿童安全上网 ／ 专为小米智能家居优化', '2019-12-05 22:18:17', '白色', '路由器', '20');
INSERT INTO `goods` VALUES ('17', '小米手表', 'cd1.jpg', '1299.00', '能打电话、独立上网能打电话、独立上网', '能打电话、独立上网 / 压力、睡眠、身体能量监测 / 36h超长续航 / 十大专业运动模式 / 多功能NFC / 小爱同学（小米穿戴APP iOS版预计12月支持下载。由于iOS系统限制，手表无法控制手机拨打电话；NFC仅支持交通卡）', '2019-12-05 22:25:52', '科技银*雅典黑', '穿戴', '20');
INSERT INTO `goods` VALUES ('18', '90分轻薄无缝一体织鹅绒羽绒服', 'cd2.jpg', '159.00', '无缝防钻绒', '无缝防钻绒 / 高含量鹅绒 / 持续保温 / 4 级防泼水', '2019-12-05 22:27:56', '黑*蓝*灰*红', '穿戴', '20');
INSERT INTO `goods` VALUES ('19', '小米VR一体机 ', 'cd3.jpg', '1499.00', '骁龙 821 处理器 ', '骁龙 821 处理器 / 多项性能优化算法 / 定制 VR 专用 Fast-Switch 2K 超清屏 Oculus 特殊调制衍射光学系统', '2019-12-05 22:29:49', '白色', '穿戴', '20');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(50) DEFAULT NULL,
  `goods_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `goods_name` varchar(50) DEFAULT NULL,
  `img_path` varchar(50) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `goods` (`goods_id`),
  KEY `users` (`user_id`),
  CONSTRAINT `goods` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`),
  CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('4', '20191151140361', '1', '3', '2019-11-05 11:40:36', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('5', '20191151141111', '1', '3', '2019-11-05 11:41:11', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '2');
INSERT INTO `orders` VALUES ('6', '2019115170440', '1', '3', '2019-11-05 17:00:44', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('7', '2019115170461', '2', '3', '2019-11-05 17:00:46', '123456', '小米9  Pro 5G', 'mi9Pro5G.jpg', '3699.00', '1');
INSERT INTO `orders` VALUES ('9', '20191151724170', '1', '3', '2019-11-05 17:24:17', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('10', '20191151724171', '2', '3', '2019-11-05 17:24:17', '123456', '小米9  Pro 5G', 'mi9Pro5G.jpg', '3699.00', '1');
INSERT INTO `orders` VALUES ('11', '20191151725582', '4', '3', '2019-11-05 17:25:58', '123456', '米家互联网空调C1', 'miHomeC1.jpg', '2199.00', '1');
INSERT INTO `orders` VALUES ('12', '20191151728472', '4', '3', '2019-11-05 17:28:47', '123456', '米家互联网空调C1', 'miHomeC1.jpg', '2199.00', '1');
INSERT INTO `orders` VALUES ('13', '2019115172970', '1', '3', '2019-11-05 17:29:07', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('14', '2019115173040', '3', '3', '2019-11-05 17:30:04', '123456', 'Redmi Note 8', 'Redmi Note 8.jpg', '999.00', '2');
INSERT INTO `orders` VALUES ('15', '20191151730190', '6', '3', '2019-11-05 17:30:19', '123456', '米家新风机A1', 'miHomeNewfengji.jpg', '1799.00', '1');
INSERT INTO `orders` VALUES ('16', '20191151742360', '8', '3', '2019-11-05 17:42:36', '123456', '米家风冷三门冰箱', 'bingxing.jpg', '1699.00', '1');
INSERT INTO `orders` VALUES ('17', '20191151855411', '3', '3', '2019-11-05 18:55:41', '123456', 'Redmi Note 8', 'Redmi Note 8.jpg', '999.00', '1');
INSERT INTO `orders` VALUES ('18', '20191152222211', '1', '3', '2019-11-05 22:22:21', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('19', '20191152331161', '1', '11', '2019-11-05 23:31:16', '520520', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '2');
INSERT INTO `orders` VALUES ('20', '20191152332160', '14', '11', '2019-11-05 23:32:16', '520520', '小米路由器AC2100', 'roult1.jpg', '229.00', '2');
INSERT INTO `orders` VALUES ('21', '2019116937511', '1', '3', '2019-11-06 09:37:51', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '1');
INSERT INTO `orders` VALUES ('22', '2019116939320', '12', '3', '2019-11-06 09:39:32', '123456', '小米笔记本Air', 'Air.jpg', '4999.00', '3');
INSERT INTO `orders` VALUES ('23', '20191161210581', '1', '3', '2019-11-06 12:10:58', '123456', '小米cc9 Pro', 'miCC9Pro.jpg', '2799.00', '2');
INSERT INTO `orders` VALUES ('24', '20191161212420', '16', '3', '2019-11-06 12:12:42', '123456', '小米路由器4A千兆版', 'roult3.jpg', '119.00', '1');
INSERT INTO `orders` VALUES ('25', '20191161212460', '17', '3', '2019-11-06 12:12:46', '123456', '小米手表', 'cd1.jpg', '1299.00', '1');
INSERT INTO `orders` VALUES ('26', '20191161212461', '18', '3', '2019-11-06 12:12:46', '123456', '90分轻薄无缝一体织鹅绒羽绒服', 'cd2.jpg', '159.00', '1');

-- ----------------------------
-- Table structure for shoppingcart
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `goods_id` int(10) NOT NULL,
  `goods_price` decimal(10,2) NOT NULL,
  `goods_number` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user_id`),
  KEY `good` (`goods_id`),
  CONSTRAINT `good` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcart
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15223998752', '123456');
INSERT INTO `user` VALUES ('3', '123456', '123456');
INSERT INTO `user` VALUES ('4', 'xyc', '123456');
INSERT INTO `user` VALUES ('5', '12345678', '111111');
INSERT INTO `user` VALUES ('6', 'jack', '123456');
INSERT INTO `user` VALUES ('8', 'Jacklove', '123456');
INSERT INTO `user` VALUES ('9', 'jackLove1', '123456');
INSERT INTO `user` VALUES ('10', '1230', '45566');
INSERT INTO `user` VALUES ('11', '520520', '1314');
INSERT INTO `user` VALUES ('12', '1234595', '123456');
