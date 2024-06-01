#!/bin/bash

HOST_IP=$1
GATEWAY=$2
GATEWAY_MASK=$3

INTERFACE=$(ip -o -4 route show to default | awk '{print $5}')

cat <<EOF | sudo tee /etc/netplan/01-netcfg.yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    $INTERFACE:
      dhcp4: false
      dhcp6: false
      addresses:
        - $HOST_IP/$GATEWAY_MASK
      gateway4: $GATEWAY
      nameservers:
        addresses:
          - 4.2.2.1
          - 4.2.2.2
          - 208.67.220.220
      optional: true
EOF