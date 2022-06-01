using DAL.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapping
{
    public class ProductToImagesBLL
    {
        private ProductToImagesDAL productDAL ;
        public ProductToImagesBLL()
        {
            productDAL = new ProductToImagesDAL();
        }
        public bool insertProductToImages( string productID, string imagesID)
        {
            return productDAL.insertProductToImages(productID, imagesID);
        }

    }
}
