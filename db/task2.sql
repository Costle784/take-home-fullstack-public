-- return a count of drg values (num_drgs) in gmc_2019 that are
-- also in cds and reimburse tables as 'drg_code'


-- SELECT gmc_2019.drg, count(*) as num_drgs
-- FROM gmc_2019
-- LEFT JOIN cds ON gmc_2019.drg = cds.drg_code
-- WHERE
--     gmc_2019.drg = cds.drg AND
-- LEFT JOIN 
--     reimburs ON gmc_2019.drg = reimburs.drg_code
-- WHERE
--     gmc_2019.drg = reimburs.drg_code

SELECT Count(*) AS num_drgs
FROM   gmc_2019
    JOIN cds
        ON gmc_2019.drg = cds.drg_code
    JOIN reimburs
        ON gmc_2019.drg = reimburs.drg_code 
