import "./PhotoModal.css";

const PhotoModal = ({ isOpen, closeModal, itemData }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content-container">
            <img src="/back-arrow.svg" alt="back-button" />
            <div className="modal-content">
              <img
                className="modal-image"
                src={itemData?.content?.thumbnail_url}
                alt={itemData?.creator?.name}
              />
              <div>
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
              </div>
            </div>
            <img src="/next-arrow.svg" alt="next-button" />
          </div>
        </div>
      </div>
    )
  );
};

export default PhotoModal;
