using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.User
{
    public class UserBO
    {
        public int userID { get; set; }
       
        public string email { get; set; }
        public string password { get; set; }
        public string lastName { get; set; }
        public string fristName { get; set; }
        public string avatar { get; set; }
        public string urlImage { get; set; }
        public int status { get; set; }
        public int access { get; set; }
        public DateTime createdDate { get; set; }
        public int createdBy { get; set; }
        public DateTime updatedDate { get; set; }
        public DateTime updatedBy { get; set; }

    }
}
