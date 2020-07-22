package com.Content;

import java.sql.*;
import java.lang.String;


//import java.sql.Connection;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;

public class method {
    /*
     * 功能： 验证用户名和密码是否正确
     * 返回值介绍
     * 1 正确
     * 2 用户名不存在
     * 3 密码错误
     *
     */
    public static int verify(String name, String password) {
        Connection conn;
        Statement sql;
        ResultSet result;
        int key = -1;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return 0;
        }
        try {
            sql = conn.createStatement();
            result = sql.executeQuery("select * from user where username = '" + name + "'");
            System.out.println("select * from user where username = '" + name + "'");
            result.last();
            if (result.getRow() == 0) {
                key = 2;   //用户名不存在
            } else {
                result.first();
                String pd = result.getString("password");
                if (pd.equals(password)) {
                    key = 1;   //密码正确
                } else {
                    key = 3;   //密码错误
                }
            }
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return key;
    }

    /*
     * 添加用户名 密码
     * @param name
     * @param password
     * @return
     */
    public static boolean addUser(String name, String password) {
        Connection conn;
        Statement sql;
        ResultSet result;
        boolean bool = false;

        conn = Connect.getDbConnect();
        if (conn == null) return false;
        try {
            sql = conn.createStatement();
            result = sql.executeQuery("select * from user where username='" + name + "'");
            result.last();
            if (result.getRow() != 0) {
                bool = false;
            } else {
                String str = "insert into user(username,password) values('" + name + "','" + password + "')";
                int key = sql.executeUpdate(str);
                bool = (key == 0) ? false : true;
            }
            result.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {

        }
        return bool;
    }


    /*
    返回数据 一条记录用 # 分割，纪录内容用 $ 分割；颜色用*号分割
     */
    public static String navData(String value) {
        Connection conn;
        Statement sql;
        String str = null;
        ResultSet result;
        String returnStr = "";
        boolean flag = false;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "error";
        }
        try {
            sql = conn.createStatement();
            str = "select * from goods where type ='" + value + "'limit 0,40";
            result = sql.executeQuery(str);
            while (result.next()) {
                if (flag) {
                    returnStr += "#";
                } else {
                    flag = true;
                }
                String[] datas = new String[10];
                for (int i = 1; i <= 10; i++) {
                    datas[i - 1] = result.getString(i);
                }
                for (int i = 0; i < datas.length; i++) {
                    if ((i + 1) != datas.length) {
                        returnStr += datas[i] + "$";
                    } else {
                        returnStr += datas[i];
                    }
                }
            }
            result.close();
            conn.close();
        } catch (SQLException e) {
            System.out.println(str);
            e.printStackTrace();
        }
        return returnStr;
    }

    // 返回纪录条数

    public static int rowCount(String value) {
        Connection conn;
        Statement sql;
        String str = null;
        ResultSet result;
        boolean flag = false;
        int rows = 0;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return 0;
        }
        try {
            sql = conn.createStatement();
            str = "select * from goods where type ='" + value + "'limit 0,40";
            result = sql.executeQuery(str);

            result.last();
            rows = result.getRow();
            result.close();
            conn.close();
        } catch (SQLException e) {
            System.out.println(str);
            e.printStackTrace();
        }

        return rows;
    }

    public static int addSoppingCart(String userName, int goodsId, int number, double price) {
        Connection conn;
        Statement sql;
        ResultSet result;
        ResultSet resultAdd;
        String sqlStr = null;

        int userId = -1;
        int num = 0;
        conn = Connect.getDbConnect();
        if (conn == null) {
            return 0;
        }
        try {
            sqlStr = "select id from user where username = '" + userName + "'";
            sql = conn.createStatement();
            result = sql.executeQuery(sqlStr);
            result.next();
            userId = result.getInt(1);

            result.close();

            sqlStr = "insert into shoppingcart(user_id,goods_id,goods_price,goods_number) values (" + userId + "," + goodsId + "," + price + "," + number + ")";

            num = sql.executeUpdate(sqlStr);

            sql.close();
            conn.close();
        } catch (SQLException e) {
            System.out.println(sqlStr);
            e.printStackTrace();
        }

        return num;
    }

    //返回购物车的数量
    public static int getSoppingCertNumber(String str1) {
        Connection conn;
        Statement sql;
        ResultSet result;
        String sqlStr = null;
        int key = -1;

        int str1Id = getNameId(str1);
        conn = Connect.getDbConnect();
        if (conn == null) {
            return -1;
        }

        try {
            sqlStr = "select id from shoppingcart where user_id = "+str1Id;
            sql = conn.createStatement();
            result = sql.executeQuery(sqlStr);
            result.last();
            key = result.getRow();
            result.close();
            sql.close();
            conn.close();

        } catch (SQLException e) {
            System.out.println(sqlStr);
        }

        return key;
    }

    public static int getNameId(String name) {
        Connection conn;
        Statement sql;
        ResultSet result;
        String sqlStr = null;
        int key = -1;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return -1;
        }

        try {
            sqlStr = "select id from user where username=\"" + name + "\" ";
            sql = conn.createStatement();
            result = sql.executeQuery(sqlStr);
            result.next();
            key = result.getInt(1);
            result.close();
            sql.close();
            conn.close();
        } catch (SQLException e) {
            System.out.println(sqlStr);
        }
        return key;

    }

    //s添加订单
    public static int setOrder(String orderId, String name, int goodsId, String time, int goodsNumber) {  //订单号  用户名  商品id 时间   数量
        Connection conn;
        Statement sql;
        ResultSet result;
        String sqlStr = null;
        int key = -1;
        int userId = getNameId(name);  //用户id

        String goodsName = "";
        String imgPath = "";
        double price = 0.0;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return 0;
        }

        try {
            sql = conn.createStatement();
            //名字  图片  价格;
            sqlStr = "select name,img,price from goods where id = " + goodsId + " ";
            result = sql.executeQuery(sqlStr);
            result.next();
            goodsName = result.getString(1);
            imgPath = result.getString(2);
            price = result.getDouble(3);

            sqlStr = "insert into orders(orderId,goods_id,user_id,time,user_name,goods_name,img_path,price,number) " +
                    "values(\"" + orderId + "\"," + goodsId + "," + userId + ",\"" + time + "\",\"" + name + "\",\"" + goodsName + "\",\"" + imgPath + "\"," + price + "," + goodsNumber + ") ";

            key = sql.executeUpdate(sqlStr);

            result.close();
            sql.close();
            conn.close();

        } catch (SQLException e) {
            System.out.println(sqlStr);
            try {
                conn.close();
            } catch (SQLException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }
        }

        return key;

    }

    public static String getGoods(int id) {
        Connection conn;
        Statement sql;
        ResultSet result;
        String str = "";

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "";
        }

        try {
            sql = conn.createStatement();
            result = sql.executeQuery("select name,img from goods where id= " + id + "");

            result.next();
            str += result.getString(1);
            str += "$";
            str += result.getString(2);

            result.close();
            sql.close();
            conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }


        return str;

    }

    //返回购物车数据
    public static String getShoppingContent(String userName) {
        Connection conn;
        Statement sql;
        ResultSet result;
        String sqlStr = "";
        String returnStr = "";
        boolean flag = false;
        int userNameId = getNameId(userName);

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "";
        }

        try {
            sql = conn.createStatement();
            sqlStr = "select * from shoppingcart where user_id = "+userNameId;
            result = sql.executeQuery(sqlStr);

            while (result.next()) {
                String str = "";

                int id = result.getInt(1);
                int userId = result.getInt(2);
                int goodsId = result.getInt(3);
                double goodsPrice = result.getDouble(4);
                int goodsNumber = result.getInt(5);

                if (flag) {
                    returnStr += "@";
                }
                flag = true;

                str += id + "$";
                str += goodsPrice + "$";
                str += goodsNumber + "$";

                str += getGoods(goodsId);

                returnStr += str;

            }
            result.close();
            sql.close();
            conn.close();

        } catch (SQLException e) {
            System.out.println(sqlStr);
            e.printStackTrace();
        }

        return returnStr;
    }

    public static int deleteShopping(int id) {
        Connection conn;
        Statement sql;

        String sqlStr = "";
        int ret = -1;


        conn = Connect.getDbConnect();
        if (conn == null) {
            return -1;
        }

        try {
            sql = conn.createStatement();
            sqlStr = "delete from shoppingcart where id = " + id;
            ret = sql.executeUpdate(sqlStr);

            sql.close();
            conn.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ret;
    }

    public static String getGoods() {
        Connection conn;
        Statement sql;
        ResultSet result;

        String returnStr = "";
        boolean flag = false;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "";
        }
        try {
            sql = conn.createStatement();
            String str = "select * from goods";
            result = sql.executeQuery(str);

            while (result.next()) {
                String str1 = "";
                if(flag){ returnStr += "@";}
                flag = true;
                for(int i=0;i<10;i++) {
                    if(i!=0){str1 += "$";}
                    str1 += result.getString(i+1);
                }
                returnStr += str1;
            }
            result.close();
            sql.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return returnStr;
    }
    public static String getCarousel() {
        Connection conn;
        Statement sql;
        ResultSet result;

        String returnStr = "";
        boolean flag = false;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "";
        }

        try{
            sql = conn.createStatement();
            result = sql.executeQuery("select imgPath from carousel");

            while(result.next()){
                if(flag){returnStr += "$";}

                flag = true;
                returnStr += result.getString("imgPath");
            }
            result.close();
            sql.close();
            conn.close();

        }catch (SQLException e){
            e.printStackTrace();
        }

        return returnStr;
    }
    public static String getOrder(String name){
        Connection conn;
        Statement sql;
        ResultSet result;

        String returnStr = "";
        boolean flag = false;

        conn = Connect.getDbConnect();
        if (conn == null) {
            return "";
        }
        try{
            sql = conn.createStatement();
            result = sql.executeQuery("select * from orders where user_name = \""+name+"\"");
            while(result.next()){
                String str = "";
                if(flag) {
                    returnStr += "@";
                }
                flag = true;
                for(int i=0;i<10;i++){
                    if(i != 0) {
                        str += "$";
                    }
                    str += result.getString(i+1);
                }
                returnStr += str;
            }
            result.close();
            sql.close();
            conn.close();
        }catch (SQLException e) {e.printStackTrace();}

        return returnStr;
    }
}
