# Tunnelling Raspberry Pi

This project uses AWS infrastucture and a Raspberry Pi to provision resources for serving web pages over https for a subdomain.  It is meant to be easy to deploy and inexpensive to operate.  It is not meant to be highly available or fault tolerant.
what the project does
Project pros and cons
nodejs web server proxied through nginx in AWS.
### Features

* Reverse tunnel from Raspberry Pi to AWS EC2 using autossh

Technologies Used
autossh
ansible
cloudformation
nodejs
github
nginx
certbot

## Deploying

### Configuring the Secrets File

Fill out secrets template and rename to secrets.ini
The application expects a file called secrets.ini in the root of the project for secrets.

### Deploy with Ansible

`ansible-playbook deploy_tunneling_pi.yml`

## General Requirements

### Raspberry Pi Initial Setup

The Raspberry Pi will need to have ssh enabled.
You will need to supply the ip address for the pi
you will need to supply the admin username and password for the pi

### Burn an SD Card

* Raspberry Pi Imager v1.6.2
* Run `rpi-imager` in terminal
* 2021-10-30-raspios-bullseye-armhf-lite.img
* 32gb sd card

### Configure the Wireless Network

On sd card make a file

* /<path_to_sd_card>/boot/wpa_supplicant.conf

```JSON
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_PASSWORD"
    key_mgmt=WPA-PSK
}
```

### Enable ssh on First Boot

`touch /<path_to_sd_card>/boot/ssh`

< configure secrets after getting ip from raspberry pi>

< run the script >

## AWS Infrastructure
The cloudformation file deploys an ec2


AWS Creds and permissions....

needs a fqdn in route 53


### AWS Pre-Requsites
key for ec2 already in aws
registered domain name in route 53

### Local Requirements
fill out secrets page from template
aws credentials sufficient for tasks at hand



### how to use
# new raspberry pi
Set up a new raspberry pi with a keyed ssh admin.
Require ssh key for ssh access
# secure raspberry pi from default settings.

# Steps
1. Burn an image on an SD card
2. Pre-boot configuration
3. Collect Raspberry Pi Ip Address
4. Run Playbook


### after ssh restart, which is kind of slow,
### pi username should no longer work for ssh login
