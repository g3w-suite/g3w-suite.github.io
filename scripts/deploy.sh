#!/bin/bash
#
# Deploy script for g3wsuite_website
# Eseguito sul server remoto dalla GitHub Action (.github/workflows/deploy.yml)
# tramite SSH ad ogni push sul branch main.
#
# Installazione sul server:
#   1. Copiare questo file in una posizione sul server, es:
#        /usr/local/bin/g3wsuite_website-deploy.sh
#   2. Renderlo eseguibile:
#        chmod +x /usr/local/bin/g3wsuite_website-deploy.sh
#   3. Aggiornare la variabile REPO_DIR qui sotto con il path reale del repo.
#   4. Verificare che l'utente SSH usato dalla action abbia:
#        - permessi di scrittura su REPO_DIR
#        - accesso git al repository (deploy key se privato)
#

set -euo pipefail

# === CONFIGURAZIONE ===
REPO_DIR="var/www/website"
BRANCH="main"
LOG_FILE="/root/g3wsuite_website-deploy.log"
# ======================

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "=== Inizio deploy ==="

if [ ! -d "$REPO_DIR/.git" ]; then
    log "ERRORE: $REPO_DIR non è un repository git"
    exit 1
fi

cd "$REPO_DIR"

log "Fetch da origin..."
git fetch --all --prune

log "Reset hard su origin/$BRANCH..."
git reset --hard "origin/$BRANCH"

log "Commit corrente: $(git rev-parse --short HEAD) - $(git log -1 --pretty=%s)"

log "=== Deploy completato con successo ==="
