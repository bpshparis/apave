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

### Natural Language Understading

#### Install jq 

> :bulb: jq is a json parser for command line

```
[ -z $(command -v jq) ] && { wget -c https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 && chmod +x jq-linux64 && mv jq-linux64 /usr/local/sbin/jq; } || echo jq installed
```

#### Search availability in catalog

```
ibmcloud catalog search understanding

ibmcloud catalog service natural-language-understanding
```

#### Create instance

```
INSTANCE_NAME="nlu0"
PLAN="free"
REGION="eu-de"

GROUP_NAME=$(ibmcloud resource groups --output json | jq -r .[0].name)

ibmcloud resource service-instance-create $INSTANCE_NAME natural-language-understanding  $PLAN $REGION -g $GROUP_NAME	

KEY_NAME="nlu0key0"

ibmcloud resource service-key-create $KEY_NAME Manager --instance-name $INSTANCE_NAME

NLU_APIKEY=$(ibmcloud resource service-key $KEY_NAME --output json | jq -r '.[].credentials | select(.iam_apikey_name == "'$KEY_NAME'") | .apikey') && echo $NLU_APIKEY

NLU_URL=$(ibmcloud resource service-key $KEY_NAME --output json | jq -r '.[].credentials | select(.iam_apikey_name == "'$KEY_NAME'") | .url') && echo $NLU_URL

NLU_VERSION="2019-07-12"

NLU_METHOD=/v1/analyze?version=$NLU_VERSION && echo $NLU_METHOD

NLU_FEATURES='{"sentiment": {}, "keywords": {}, "entities": {}, "categories": {}, "concepts": {}}' && echo "$NLU_FEATURES" | jq .

cat > WebContent/res/all_nlu_features.json << EOF
{
  "concepts": {},
  "emotion": {},
  "entities": {
    "mentions": true,
    "sentiment": true,
    "emotion": true
  },
  "keywords": {
    "sentiment": true,
    "emotion": true
  },
  "metadata": {},
  "relations": {},
  "semantic_roles": {
    "keywords": true,
    "entities": true
  },
  "sentiment": {},
  "categories": {
    "explanation": true
  },
  "syntax": {
    "tokens": {
      "lemma": true,
      "part_of_speech": true
    },
    "sentences": true
  },
  "return_analyzed_text": true
}
EOF

ALL_NLU_FEATURES=$(jq -c . WebContent/res/all_nlu_features.json)

NLU_TEXT="J'aimerai avoir des nouvelles de ma commande passée il y a déjà 15 jours et que je n'ai toujours pas reçu." && echo $NLU_TEXT

URL_ID=0

URL=$(jq -r '.[] | select(.id == '$URL_ID') | .url' WebContent/res/links.json) && echo $URL

jq -n --argjson features "$ALL_NLU_FEATURES" --arg text "$URL" '{"url": $text, "features": $features, "return_analyzed_text": true}' | tee nlu.req.json | jq .

curl -X POST -u 'apikey:'$NLU_APIKEY -H 'Content-Type: application/json' -d @nlu.req.json $NLU_URL$NLU_METHOD | tee WebContent/res/nlu-resp-$URL_ID.json | jq .
```

