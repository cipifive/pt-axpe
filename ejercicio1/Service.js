class Service {
    constructor(multimediaContent) {
        this.multimediaContent = multimediaContent
    }
}

class StreamingService extends Service {
    getPrice() {

        let price = this.multimediaContent.streamingPrice

        if(this.multimediaContent instanceof PremiumContent) {
            price += this.multimediaContent.additionalFee
        }

        return price
    }
}

class DownloadService extends Service {
    getPrice() {

        let price = this.multimediaContent.downloadPrice

        if(this.multimediaContent instanceof PremiumContent) {
            price += this.multimediaContent.additionalFee
        }

        return price
    }
}

class MultimediaContent {
    constructor(title,streamingPrice,downloadPrice,duration,adult,size) {
        this.title = title;
        this.streamingPrice = streamingPrice;
        this.downloadPrice = downloadPrice;
        this.duration = duration;
        this.adult = adult;
        this.size = size;
    }
}

class PremiumContent extends MultimediaContent {
    constructor(title, streamingPrice, downloadPrice, duration, adult, size, additionalFee) {
        super(title, streamingPrice, downloadPrice, duration, adult, size);
        this.additionalFee = additionalFee;
    }
}