const initialData = require('../data/initialData')
const currencyModel = require('../models/currencyModel')

const getAllCurrency = async(request,response) =>
    {
        try
        {
            const currencies = await currencyModel.find()
            if(currencies.length===0)
                {
                    const initialCurrency = await currencyModel.insertMany(initialData)
                }
                return response.status(201).json(currencies)
        }
        catch(error)
        {
            response.status(500).json({message:error.message})
        }
            
    }
    const convertCurrency = async (request, response) => {
        const { from, to, amount } = request.query;
    
        try {
            const fromCurrency = await currencyModel.findOne({ code: from });
            const toCurrency = await currencyModel.findOne({ code: to });
    
            if (!fromCurrency || !toCurrency) {
                return response.status(404).json({ message: 'Currency not found' });
            }
    
            const convertedAmount = (amount * toCurrency.value) ;
    
            return response.status(200).json({ convertedAmount });
        } 
        catch (error)
         {
            response.status(500).json({ message: error.message });
        }
    }

module.exports = {getAllCurrency,convertCurrency}
      
    