using BO.Category;
using DAL.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Category
{
   public class CategoryBLL
    {
        private CategoryDAL categoryDAL;
        public CategoryBLL()
        {
            categoryDAL = new CategoryDAL();
        }
        public List<CategoryBO> getCategory()
        {
            List<CategoryBO> listCategory = categoryDAL.getCategory();
            return listCategory;
        }
    }
}
