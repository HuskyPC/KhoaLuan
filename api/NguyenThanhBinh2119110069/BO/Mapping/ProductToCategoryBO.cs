using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.Mapping
{
   public class ProductToCategoryBO
    {
        public int id { get; set; }
        public string productID { get; set; }
        public string categoryID { get; set; }
        public int status { get; set; }
    }
}
