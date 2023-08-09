#!/bin/bash

function usage() {
    cat <<USAGE

Usage:
    $0 [command] [options]

Commands:
    install      Install necessary components (sc-web, sc-machine) and clone knowledge bases
    clean        Remove all knowledge base folders
    add          Add a knowledge base from a local directory or a remote git repository
    run          Run ostis
    unplug       Remove a knowledge base from repo.path without deleting the directory
    info         Display information about the knowledge bases in use
    help         Show usage information

Description:
    pancake - script that allows you to install and manage knowledge bases.
    It can install the required components, clean up existing knowledge bases,
    and add new knowledge bases from git repositories.

USAGE
    exit 1
}




# ==============================================
# COMMAND SWITCHER

case $1 in
# run ostis
run)
    shift 1;
    FILE=`realpath ./backups/last/infopanel-latest.sql.gz`
    gunzip -c -f $FILE > "$PWD/init.sql"
    docker compose up
    ;;

# stop ostis
stop)
    shift 1;
    docker compose down 
    ;;

# show help
--help)
    usage
    ;;
help)
    usage
    ;;
-h)
    usage
    ;;

# All invalid commands will invoke usage page
*)
    usage
    ;;
esac