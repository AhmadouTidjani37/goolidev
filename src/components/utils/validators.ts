/**
 * Utilitaire de validation pour les formulaires
 * @packageDocumentation
 */

/**
 * Valide une adresse email
 * @param email - L'email à valider
 * @returns true si l'email est valide, false sinon
 */
export const validateEmail = (email: string): boolean => {
  // Regex standard pour validation d'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valide un numéro de téléphone
 * @param phone - Le numéro à valider
 * @returns true si le numéro est valide, false sinon
 * 
 * Formats acceptés:
 * - +237 687 564 676
 * - 237687564676
 * - 687564676
 * - +237-687-564-676
 * - (237) 687 564 676
 */
export const validatePhone = (phone: string): boolean => {
  // Regex corrigée - sans caractères d'échappement inutiles
  // Accepte: chiffres, espaces, +, -, parenthèses
  const phoneRegex = /^[\d\s+\-()]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Nettoie un numéro de téléphone en ne gardant que les chiffres
 * @param phone - Le numéro à nettoyer
 * @returns Une chaîne contenant uniquement les chiffres
 */
export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

/**
 * Formate un numéro de téléphone pour l'affichage
 * @param phone - Le numéro à formater
 * @returns Le numéro formaté (ex: +237 687 564 676)
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = cleanPhoneNumber(phone);
  
  // Format pour le Cameroun (+237 XX XXX XXXX)
  if (cleaned.length === 12 && cleaned.startsWith('237')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  // Format standard avec 9 chiffres
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  
  // Format international par défaut
  if (cleaned.length > 9) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  return phone;
};

/**
 * Vérifie si une chaîne est vide ou ne contient que des espaces
 * @param str - La chaîne à vérifier
 * @returns true si la chaîne est vide ou ne contient que des espaces
 */
export const isEmpty = (str: string | null | undefined): boolean => {
  return !str || str.trim() === '';
};

/**
 * Valide qu'un champ obligatoire n'est pas vide
 * @param value - La valeur à vérifier
 * @param fieldName - Le nom du champ pour le message d'erreur
 * @returns Un message d'erreur si invalide, null si valide
 */
export const validateRequired = (value: string, fieldName: string): string | null => {
  if (isEmpty(value)) {
    return `Le champ "${fieldName}" est requis`;
  }
  return null;
};

/**
 * Valide la longueur minimale d'une chaîne
 * @param value - La valeur à vérifier
 * @param minLength - La longueur minimale requise
 * @param fieldName - Le nom du champ pour le message d'erreur
 * @returns Un message d'erreur si invalide, null si valide
 */
export const validateMinLength = (
  value: string, 
  minLength: number, 
  fieldName: string
): string | null => {
  if (value.trim().length < minLength) {
    return `Le champ "${fieldName}" doit contenir au moins ${minLength} caractères`;
  }
  return null;
};

/**
 * Valide la longueur maximale d'une chaîne
 * @param value - La valeur à vérifier
 * @param maxLength - La longueur maximale autorisée
 * @param fieldName - Le nom du champ pour le message d'erreur
 * @returns Un message d'erreur si invalide, null si valide
 */
export const validateMaxLength = (
  value: string, 
  maxLength: number, 
  fieldName: string
): string | null => {
  if (value.trim().length > maxLength) {
    return `Le champ "${fieldName}" ne doit pas dépasser ${maxLength} caractères`;
  }
  return null;
};

/**
 * Valide que deux champs correspondent (ex: mot de passe et confirmation)
 * @param value1 - Première valeur
 * @param value2 - Deuxième valeur
 * @param fieldName - Le nom du champ pour le message d'erreur
 * @returns Un message d'erreur si invalide, null si valide
 */
export const validateMatch = (
  value1: string,
  value2: string,
  fieldName: string
): string | null => {
  if (value1 !== value2) {
    return `Les champs "${fieldName}" ne correspondent pas`;
  }
  return null;
};