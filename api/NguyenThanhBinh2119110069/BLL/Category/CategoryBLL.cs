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
<<<<<<< Updated upstream
=======
        public List<CategoryBO> getProductByCategory(string brandID)
        {
            BrandBLL objBrand = new BrandBLL();
            List<BrandBO> listBrand = objBrand.getBrandIDandParentID();

            List<CategoryBO> listCategory = categoryDAL.getCategory();

            ProductToCategoryBLL objMap = new ProductToCategoryBLL();
            List<ProductToCategoryBO> listMap = objMap.getAllmappingProductCategory();


            for (int i = 0; i < listBrand.Count; i++)
            {
                if (listBrand[i].brandID == brandID)
                {
                    if (listBrand[i].productBo.Count != 0)
                    {
                        for (int y = 0; y < listBrand[i].productBo.Count; y++)
                        {
                            for (int cate = 0; cate < listCategory.Count; cate++)
                            {
                                for (int pro = 0; pro < listBrand[i].productBo.Count; pro++)
                                {

                                    if (listBrand[i].productBo[pro].ProductID == listMap[y].productID && listMap[y].categoryID == listCategory[cate].categoryID)
                                    {

                                        listCategory[cate].productBO[cate] = listBrand[i].productBo[pro];

                                    }
                                }
                            }
                        }
                    }
                }
            }
            return listCategory;


        }
>>>>>>> Stashed changes
    }
}
