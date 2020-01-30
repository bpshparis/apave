### Links

#### Main

[AEIA](https://www.iaea.org/)

#### Quick

- [Verification and monitoring in Iran](https://www.iaea.org/newscenter/focus/iran)
- [Verification in the DPRK](https://www.iaea.org/newscenter/focus/dprk)
- [63rd General Conference](https://www.iaea.org/about/policy/gc/gc63)
- [Fukushima nuclear accident](https://www.iaea.org/newscenter/focus/fukushima)
- [Fukushima Daiichi status updates](https://www.iaea.org/newscenter/focus/fukushima/status-update)
- [Chernobyl nuclear accident](https://www.iaea.org/newscenter/focus/chernobyl)


### Install ibmcloud CLI

	curl -fsSL https://clis.cloud.ibm.com/install/linux | sh

### Login to IBM Cloud

> :bulb: To avoid being prompt when using ibmcloud command set the following config parameters

```
ibmcloud config --check-version false
ibmcloud config --usage-stats-collect false
```

#### Login with one-time passcode

```
USERID="sebastien.gautier@fr.ibm.com"
PASSWD="j1mm4p6p"

ibmcloud login -u $USERID -p $PASSWD --sso --no-region
```

> paste the one-time passcode when prompt  and hit enter.

#### Create an API key and store it in your home  directory
	
```
APIKEY_NAME="apikey0"
ibmcloud iam api-key-create $APIKEY_NAME -d "$APIKEY_NAME" --file ~/$APIKEY_NAME
```

#### Login with API key stored in your home directory

```
ibmcloud logout
ibmcloud login --apikey @~/$APIKEY_NAME --no-region
```



