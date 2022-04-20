using BO.User;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace DAL.User
{
    public class UserDAL
    {
        DBConnection DB;
        public UserDAL()
        {
            DB = new DBConnection();
        }
        public async Task<bool> postCreateUser(UserBO user)
        {
            string procedure = "postCreateUsser";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@email", user.email);
            com.Parameters.AddWithValue("@password", user.password);
            com.Parameters.AddWithValue("@lastName", user.lastName);
            com.Parameters.AddWithValue("@fristName", user.fristName);
            com.Parameters.AddWithValue("@status", 1);
            com.Parameters.AddWithValue("@access", 0);
            com.Parameters.AddWithValue("@createdDate", DateTime.Now.ToString("MM/dd/yyyy"));
            com.Parameters.AddWithValue("@createdBy", 1);
            con.Open();
            var result = com.ExecuteNonQuery();
            con.Close();

            if (result > 0)
            {
                return true;
            }
            return false;
        }
    }

}
