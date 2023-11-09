import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from "./ImagePopup";
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [cards, setCards] = useState([]);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleDeletePopupClick(card) {
        setIsDeletePopupOpen(true);
        setCardToDelete(card)
    }

    function handleConfirmDelete() {
        if(cardToDelete) {
            handleCardDelete(cardToDelete);
        }
        setIsDeletePopupOpen(false);
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
            console.log('Ошибка: ', err);
        });
    }

    function handleCardDelete(card) {
        api.deleteCardApi(card._id)
            .then(() => {
                setCards((prevState) => prevState.filter((c) => c._id !== card._id));
                setIsDeleting(false);
            })
            .catch((err) => {
                console.log('Ошибка: ', err);
            })
            .finally(() => {
            setIsDeleting(false);
        });
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setSelectedCard(null);
    }

    function handleUpdateUser({ name, about }) {
        api.editApiProfile(name, about)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Ошибка:', err);
      });
    }

    function handleUpdateAvatar(newAvatar) {
        api.editAvatar(newAvatar.avatar)
        .then((res) => {
            setCurrentUser({...currentUser, avatar: res.avatar});
            closeAllPopups();
        })
        .catch((err) => {
            console.log('Ошибка:', err);
          });
    }

    function handleAddPlaceSubmit({name, link}) {
        api.addNewCardApi(name, link)
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Ошибка:', err);
      });
  }

    useEffect(() => {
        function handleEscClose(event) {
            if (event.key === 'Escape') {
                closeAllPopups();
            }
        }

        function handleOverlayClose(event) {
            if (event.target.classList.contains('popup')) {
                closeAllPopups();
            }
        }

        window.addEventListener('keydown', handleEscClose);
        window.addEventListener('mousedown', handleOverlayClose);

        return () => {
            window.removeEventListener('keydown', handleEscClose);
            window.removeEventListener('mousedown', handleOverlayClose);
            document.body.classList.add('body');
        };
    }, []);

    useEffect(() => {
        api.getApiUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {

        api.getAllCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log('Ошибка:', err);
            });
        }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header />
            <Main cards={cards} onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                setCards={setCards} 
                onCardDelete={handleCardDelete} 
                onDeletePopupClick={handleDeletePopupClick} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            <Footer />
            
            <EditProfilePopup isEditProfilePopupOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups} onUpdateUser={handleUpdateUser} />

            <AddPlacePopup isAddPlacePopupOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

            <EditAvatarPopup isEditAvatarPopupOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

            <DeleteCardPopup isDeletePopupOpen={isDeletePopupOpen} closeAllPopups={closeAllPopups} onConfirmDelete={handleConfirmDelete} card={cardToDelete} isDeleting={isDeleting} />

        </div>
    </CurrentUserContext.Provider>


  );
}

export default App;
