--- Please write SQL statements after the appropriate numbered lines below:

-- 1.
    SELECT u.user_id,
        g.state_name,
        g.state_code
    FROM   ourdata.users u
        JOIN ourdata.geo g
            ON u.state = g.st_code;

-- 2.
    SELECT state,
        Count(user_id) AS user_count
    FROM   ourdata.users
    GROUP  BY state;

-- 3.
    SELECT state,
        Max(user_count)
    FROM   (SELECT state,
                Count(user_id) AS user_count
            FROM   ourdata.users
            GROUP  BY state) AS state_counts
--
