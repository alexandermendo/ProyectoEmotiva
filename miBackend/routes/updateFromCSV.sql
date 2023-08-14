DECLARE @itemCode VARCHAR(20) = '{ItemCode}';
DECLARE @priceList VARCHAR(20) = '{PriceList}';
DECLARE @newPurchasePrice DECIMAL(18, 2) = '{NewPurchasePrice}';

DECLARE @purchasePrice DECIMAL(18, 2) DECLARE @publicPrice DECIMAL(18, 2) DECLARE @publicPriceWithDiscount DECIMAL(18, 2) DECLARE @ListNum DECIMAL(18, 2) DECLARE @profit DECIMAL(18, 2) -- Verificar si la lista de precios existe y crearla si no
DECLARE @listExists INT

-- Consultamos si la lista de precios existe en SAP
SELECT
    @listExists = COUNT(*)
FROM
    OPLN
WHERE
    ListName = @priceList IF @listExists = 0 BEGIN -- La lista de precios no existe, entonces crea una nueva
    DECLARE @newListNum SMALLINT    -- Creamos una variable para crear la nueva lista
-- Adicionamos la nueva lista de precios

SELECT
    @newListNum = MAX(ListNum) + 1
FROM
    OPLN
INSERT INTO   -- Insertamos en SAP la nueva lista de precios
    OPLN (ListNum, ListName)
VALUES
    (@newListNum, @priceList)
SET
    @ListNum = @newListNum
END
SET
    @purchasePrice = (
        -- Le asignamos el precio de compra a esa nueva lista de precios
        SELECT
            OITM.LastPurPrc
        FROM
            OITM
            INNER JOIN ITM1 ON OITM.ItemCode = ITM1.ItemCode
            LEFT JOIN OPLN ON ITM1.PriceList = OPLN.ListNum
        WHERE
            OITM.ItemCode = @itemCode
            AND OPLN.ListName = @priceList
    )
SET
    @publicPrice = (@purchasePrice * 1.25)
SET
    @ListNum = (

        
        SELECT
            ListNum
        FROM
            OPLN
        WHERE
            ListName = @priceList
    )
SET
    @profit = FORMAT(
        (
            (@publicPriceWithDiscount - @purchasePrice) / NULLIF(@purchasePrice, 0)
        ) * 100,
        'N1'
    ) -- actualizar el precio de compra en la tabla OITM
SET
    @newPurchasePrice = @newPurchasePrice -- reemplazar con el nuevo precio de compra


-- En caso que la lista de precios exista, se actualiza el precio de compra

UPDATE
    OITM
SET
    LastPurPrc = @newPurchasePrice
WHERE
    ItemCode = @itemCode --Devuelve los datos que se guardarán
SELECT
    @itemCode AS itemCode,
    @priceList AS priceList,
    @purchasePrice AS purchasePrice,
    @newPurchasePrice AS newPurchasePrice,
    @publicPrice AS publicPrice,
    @publicPriceWithDiscount AS publicPriceWithDiscount,
    @ListNum AS ListNum,
    @profit AS profit,
    (
        SELECT
            ItemName
        FROM
            OITM
        WHERE
            ItemCode = @itemCode
    ) AS itemName

-- Se actualiza el precio al público con descuento.

UPDATE
    ITM1
SET
    Price = @publicPriceWithDiscount
WHERE
    ItemCode = @itemCode
    AND PriceList = @ListNum