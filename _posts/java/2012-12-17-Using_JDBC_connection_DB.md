---
layout: post
title:  "使用jdbc连接数据库的方法详解"
date:   2012-12-17 12:00:00
categories: java
---

本文讲解如何通过使用jdbc来连接javaDB数据库

1.准备工作 创建并配置好相应的数据库

  * 主机地址：127.0.0.1（localhost） 端口号：1527

  * 所要连接数据库： myDB （编码前已创建）

  * 数据库用户名：student  密码：student 

  * 导入或添加所需连接数据库的驱动jar包(可将所需jar包添加至ClassPath)

    在NetBeans中使用javaDB数据库时添加库文件即可。

    mysql等数据库的的jar包若没有集成，可自行去下载。

2.通过代码实现连接数据库

使用JDBC主要包括以下步骤:

* 设置JDBC连接所需的URL、user、password

  * URL：定义了连接数据库时的协议、子协议、数据源标识。
   
    书写形式：协议:子协议:数据源标识  
  
    - 协议：在JDBC中总是以jdbc开始
    
    - 子协议：是桥连接的驱动程序或是数据库管理系统名称。
    
    - 数据源标识：标记找到数据库来源的地址与连接端口。
    
    如连接javaDB:
     
         String url ="jdbc:derby://localhost:1527/myDB";
   
    连接MySql:
   
         String url="jdbc:mysql://localhost:3306/myDB?useUnicode=true&characterEncoding=utf8";
         
     
     其中  
   
     - localhost：代表数据库服务器（主机）的地址
     
     - 1527：MySql数据库的端口号
         
     - myDB：所要连接的数据库名称
         
     - useUnicode=true：表示使用Unicode字符编码。
         
     - characterEncoding=gbk：字符编码方式。
         
       （若characterEncoding设置为gb2312或GBK,useUnicode参数必须设置为true）
   
   * 用户名和密码：
   
         String user="student";         //数据库用户名
         String pwd="student";          //数据库密码
        
* 获得连接

  通过调用DriverManager的getConnectin(String url,String username,String password )方法获得与数据库的连接。

      Connection conn= DriverManager.getConnection(url,user,pwd);

* 关闭连接
    
    数据库资源很宝贵，一定要注意及时释放不用的连接

      conn.close();

3.编码并实现
代码如下：
{% highlight java %}
    import java.sql.Connection;
    import java.sql.DriverManager;
     /**
      * 使用jdbc连接javaDB数据库
      * Blog：http://zhengzhikun.cn
      * @author zhengzk
      */
    public class ConnUtils {
        private static String url;
        private static String driver;
        private static String user;
        private static String pwd;
     
        //static 方法在类加载时执行 只执行一次
        static{ 
             url="jdbc:derby://localhost:1527/myDB";
             user="student";
             pwd="student";
             driver="org.apache.derby.jdbc.EmbeddedDriver";
     
             try {
                 Class.forName(driver).newInstance(); 
             } catch (Exception e) {
                 // 打印异常堆栈信息
                 e.printStackTrace();
                 throw new RuntimeException("加载连接数据库的动时失败！");
             } 
        }
     
        public static Connection getConnection() throws Exception{
        Connection conn=null;
        try {
             conn=DriverManager.getConnection(url,user,pwd);
         } catch (Exception e) {
             // 打印异常堆栈信息
             e.printStackTrace();
             throw new RuntimeException("连接数据库失败：连接不能正常获取！");
         }
         return conn;
     }
     
     public static void close(Connection conn) throws Exception{
         if(conn!=null){
             try{
                 conn.close();
             }catch (Exception e) {
                 e.printStackTrace();
                 throw new RuntimeException("连接不能正常关闭！");
             }
         }
     }
     
     //测试
     public static void main(String[] args) throws Exception {
         Connection conn=null;
         conn=ConnUtils.getConnection(); 
        System.out.println(conn);
         ConnUtils.close(conn); 
         }
    }
{% endhighlight %}
* 源码下载地址：http://www.kuaipan.cn/file/id_12153907044182546.htm
* 测试运行时请先打开javaDB服务
* 备注本文编码前提：所连接的主机已安装相应数据库系统并已建立相应的数据库如：myDB
* 其它常见数据库连接方式请访问：[使用jdbc连接常用数据库汇总](/java/2012/12/17/Using_JDBC_connection_DB_summary.html)