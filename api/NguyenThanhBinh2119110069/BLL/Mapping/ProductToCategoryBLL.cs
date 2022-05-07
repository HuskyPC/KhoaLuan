using BO.Mapping;
using DAL.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapping
{
    public class ProductToCategoryBLL
    {
       private ProductToCategoryDAL proCateDAL;
       public ProductToCategoryBLL()
        {
            proCateDAL = new ProductToCategoryDAL();
        }
        public List<ProductToCategoryBO> getAllmappingProductCategory()
        {
            List<ProductToCategoryBO> listProCate = proCateDAL.getAllmappingProductCategory();
            return listProCate;
        }
    }
}
