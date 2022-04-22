using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.cart
{
    public class CartBO
    {
        public  string cartID { get; set; }
        public string productID { get; set; }
        public int userID { get; set; }
        public int status { get; set; }

    }
}
