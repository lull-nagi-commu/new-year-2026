class LoadingManager {
    constructor(loadingContainer, loadingText, keyVisualContent) {
        this.loadingContainer = loadingContainer;
        this.loadingText = loadingText;
        this.keyVisualContent = keyVisualContent;

        this.counter = { value: 2019 };
    }

    animate() {
        gsap.to(this.counter, {
            value: 2026,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
                var year = Math.floor(this.counter.value);

                this.loadingText.text(year);
            },
            onComplete: () => {
                const timeline = gsap.timeline();

                timeline.to({}, {
                    duration: 1.5,
                    onComplete: () => {
                        this.hide();
                    }
                });

                timeline.to({}, {
                    duration: 0.5,
                    onComplete: () => {
                        this.keyVisualContent.fadeIn();
                    }
                })
            }
        });
    }

    hide() {
        $('body').removeClass('scroll-lock');
        $(this.loadingContainer).fadeOut();
    }
}
