using BO.Brand;
using DAL.Brand;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Brand
{
    public class BrandBLL
    {
        public List<BrandBO> loadBrandTopX(int sl)
        {
            BrandDAL objProduct = new BrandDAL();
            List<BrandBO> listProduct = objProduct.loadBrandTopX(sl);
            return listProduct;
        }
        public List<BrandBO> getNameBrandAll()
        {
            BrandDAL objProduct = new BrandDAL();
            List<BrandBO> listProduct = objProduct.getNameBrandAll();
            return listProduct;
        }
    }
}
