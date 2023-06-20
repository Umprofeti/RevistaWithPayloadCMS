module.exports = {
    apps : [{
      name: 'Revista',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      cron_restart: '0 */15 * * * *',
    }]
};