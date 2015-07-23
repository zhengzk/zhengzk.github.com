---
layout: default
title:  "使用jdbc连接常用数据库汇总"
date:   2012-12-17 12:00:00
categories: java
---

以下为收集整理到的各种常用数据库的连接方法

1.Sql Server7.0/2000数据库 

主机：localhost 端口:1433 数据库:myDB 用户名：sa 密码：null

{% highlight java %} 
Class.forName("com.microsoft.jdbc.sqlserver.SQLServerDriver").newInstance();
String url="jdbc:microsoft:sqlserver://localhost:1433;DatabaseName=mydb";
String user="sa";
String password="";
Connection conn= DriverManager.getConnection(url,user,password); 
{% endhighlight %}

2.Oracle8/8i/9i数据库（thin模式）

主机：localhost 端口:1521 数据库:myDB 用户名：username 密码：password

{% highlight java %} 
Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
String url="jdbc:oracle:thin:@localhost:1521:myDB"; //myDB为数据库的SID
String user="username";
String password="password";
Connection conn= DriverManager.getConnection(url,user,password); 
{% endhighlight %}

3.DB2数据库

主机：localhost 端口:5000 数据库:sample 用户名：admin 密码：null

{% highlight java %} 
Class.forName("com.ibm.db2.jdbc.app.DB2Driver ").newInstance();
String url="jdbc:db2://localhost:5000/sample"; 
String user="admin";
String password="";
Connection conn= DriverManager.getConnection(url,user,password);  
{% endhighlight %}

4.Sybase数据库

主机：localhost 端口:5007 数据库:myDB 用户名：userid 密码：user_password

{% highlight java %} 
Class.forName("com.sybase.jdbc3.jdbc.SybDriver").newInstance();
String url =" jdbc:sybase:Tds:localhost:5007/myDB";
Properties sysProps = System.getProperties();
SysProps.put("user","userid");
SysProps.put("password","user_password");
Connection conn= DriverManager.getConnection(url, SysProps); 
{% endhighlight %}

5.Informix数据库

主机：localhost 端口:1533 数据库:myDB 用户名：testuser 密码:testpassword

{% highlight java %} 
Class.forName("com.informix.jdbc.IfxDriver").newInstance();
String url = "jdbc:informix-sqli://localhost:1533/myDB:INFORMIXSERVER=myserver;
user="testuser";
password="testpassword";
Connection conn= DriverManager.getConnection(url); 
{% endhighlight %}

6.PostgreSQL数据库

主机：localhost 端口:5432 数据库:myDB 用户名：myuser 密码:mypassword
    
{% highlight java %} 
   Class.forName( "org.postgresql.Driver " ).newInstance();
   String url = " jdbc:postgresql://localhost:5432/myDB";
   String user="myuser";
   String password="mypassword";
   Connection con = DriverManager.getConnection(url,user,password ); 
{% endhighlight %}

7.access数据库（直连用ODBC）

{% highlight java %} 
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver") ;
String url="jdbc:odbc:Driver={MicroSoft Access Driver (*.mdb)};
DBQ="+application.getRealPath("/path/myDB.mdb");
Connection conn = DriverManager.getConnection(url,"","");
Statement stmtNew=conn.createStatement() ;
{% endhighlight %}

javaDB数据库及详解见：[使用JDBC连接数据库详解](/java/2012/12/17/Using_JDBC_connection_DB.html)