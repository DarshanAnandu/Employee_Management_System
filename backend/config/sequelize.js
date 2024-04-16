const { Sequelize } = require('sequelize');
const pool = require('./pool.config');

const sequelize = new Sequelize('bigil', pool.username, pool.password, {
    dialect: 'postgres',
    host: pool.host,
    port: pool.port,
    logging: false,
    dialectOptions: {
        ssl: false // disable SSL
    },
    pool: {
        max: pool.MAX,
        min: pool.MIN,
        idle: pool.IDLE,
        acquire: pool.ACQUIRE
    }
});

const createTblQry = `CREATE TABLE IF NOT EXISTS employees (
    id integer NOT NULL DEFAULT nextval('employees_id_seq'::regclass),
    employee_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    employee_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    employee_type character varying(255) COLLATE pg_catalog."default" NOT NULL,
    gender character varying(255) COLLATE pg_catalog."default" NOT NULL,
    date_of_birth timestamp with time zone NOT NULL,
    join_date timestamp with time zone NOT NULL,
    department character varying(255) COLLATE pg_catalog."default" NOT NULL,
    designation character varying(255) COLLATE pg_catalog."default",
    grade character varying(255) COLLATE pg_catalog."default",
    level character varying(255) COLLATE pg_catalog."default",
    ot_applicable character varying(255) COLLATE pg_catalog."default" NOT NULL,
    epf_number character varying(255) COLLATE pg_catalog."default",
    esi_number character varying(255) COLLATE pg_catalog."default",
    pan_number character varying(255) COLLATE pg_catalog."default" NOT NULL,
    uan_number character varying(255) COLLATE pg_catalog."default" NOT NULL,
    payment_method character varying(255) COLLATE pg_catalog."default" NOT NULL,
    paygen_yesno_relivingperiod character varying(255) COLLATE pg_catalog."default",
    reliving_date timestamp with time zone,
    enabled_portal_access character varying(255) COLLATE pg_catalog."default" NOT NULL,
    tds_dedcution character varying(255) COLLATE pg_catalog."default" NOT NULL,
    status character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_by character varying(255) COLLATE pg_catalog."default",
    created_date timestamp with time zone,
    updated_by character varying(255) COLLATE pg_catalog."default",
    updated_datetime timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
)`;

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // return sequelize.query(createTblQry);
    })
    .then(() => {
        console.log('Table created successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;