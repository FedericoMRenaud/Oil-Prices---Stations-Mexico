-- Query to check successful load
SELECT * FROM price_apr21_2020;

SELECT * FROM price_state;

SELECT * FROM price_time_serie;

-- Join tables on State
--SELECT tabla1."Fecha", tabla1."Cierre", tabla1."DGS10", covid_cases."Total_Cases"
--FROM tabla1 LEFT JOIN covid_cases ON tabla1."Fecha" = covid_cases."Date";
