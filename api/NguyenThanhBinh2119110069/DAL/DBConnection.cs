using System;
using System.Data;
using System.Data.SqlClient;

namespace DAL
{
    public class DBConnection
    {
        string conStr;
        public DBConnection()
        {
            conStr = @"Data Source=DESKTOP-KL87JFT\SQLEXPRESS;Initial Catalog=WebsiteLaptop;Persist Security Info=True;User ID=sa;Password=123456";
        }
        public SqlConnection getConnection()
        {
            return new SqlConnection(conStr);
        }
    }
}
