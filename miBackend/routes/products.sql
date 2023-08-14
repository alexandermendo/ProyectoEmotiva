SELECT 
    OITB.ItmsGrpNam AS 'productCategory',
    OITM.ItemCode AS 'idProduct',
    OITM.ItemName AS 'product',
    OITM.LastPurPrc AS 'purchasePrice',
    OITM.LastPurPrc * 0.25 AS 'profitInMoney',
    (OITM.LastPurPrc * 1.25) AS 'publicPrice',
    CAST(100 * ((OITM.LastPurPrc * 1.25) - ITM1.Price) / NULLIF(CASE WHEN (OITM.LastPurPrc * 1.25) = 0 THEN 0.001 ELSE (OITM.LastPurPrc * 1.25) END, 0) AS BIGINT) AS 'discount',
    ((OITM.LastPurPrc * 1.25 + ((ITM1.Price - OITM.LastPurPrc) * 1.25)) * CAST(100 * ((OITM.LastPurPrc * 1.25) - ITM1.Price) / NULLIF(CASE WHEN (OITM.LastPurPrc * 1.25) = 0 THEN 0.001 ELSE (OITM.LastPurPrc * 1.25) END, 0) AS BIGINT) / 100) AS 'discountInMoney',
    FORMAT(((ITM1.Price - OITM.LastPurPrc) / NULLIF(OITM.LastPurPrc, 0)) * 100, 'N1') AS 'netProfit%',
    ITM1.Price AS 'priceCustomer',
    OITM.OnHand AS 'quantity',
    OCRD.CardName AS 'comercialHouse',
    OPLN.ListName AS 'listName'
FROM [dbo].[OITM] OITM
    LEFT JOIN OMRC ON OMRC.FirmCode = OITM.FirmCode
    INNER JOIN OCRD ON OCRD.CardCode = OITM.CardCode
    INNER JOIN ITM1 ON ITM1.ItemCode = OITM.ItemCode
    INNER JOIN OITB ON OITM.ItmsGrpCod = OITB.ItmsGrpCod
    INNER JOIN OPLN ON OPLN.ListNum = ITM1.PriceList
ORDER BY OITM.ItemCode ASC
